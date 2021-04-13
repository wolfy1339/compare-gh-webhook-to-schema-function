import { WebhookEventName } from '@octokit/webhooks-definitions/schema';
import { OneOfError } from 'ajv/dist/vocabularies/applicator/oneOf';
import { mocked } from 'ts-jest/utils';
import { handler } from '../../src';
import { EventValidator, GithubEvent, getEvent } from '../../src/github';
import { Notifier } from '../../src/notifier';
import { pingEventPayload } from '../fixtures';

jest.mock('../../src/notifier');
jest.mock('../../src/github/getEvent');
jest.mock('../../src/github/EventValidator');

const mockNotifier = mocked(Notifier, true);
const mockEventValidator = mocked(EventValidator, true);
const getEventMock = mocked(getEvent);

const createMockLogger = () => {
  return console;
};

const mockLogger = createMockLogger();

const oneOfError = (): OneOfError => ({
  keyword: 'oneOf',
  instancePath: '',
  schemaPath: '#/oneOf',
  // https://github.com/ajv-validator/ajv/issues/1367
  params: { passingSchemas: (null as unknown) as [number, number] },
  message: 'should match exactly one schema in oneOf'
});

const buildHttpRequest = () => {
  return {
    method: 'POST',
    params: {},
    query: {},
    url: 'https://mysite.com',
    headers: {
      'x-github-event': 'repository' as WebhookEventName,
      'x-github-delivery': 'hello world',
      'x-hub-signature': '',
      'x-hub-signature-256': ''
    },
    rawBody: JSON.stringify({})
  };
};

describe('handler', () => {
  describe('when the event is from github', () => {
    beforeEach(() => {
      getEventMock.mockReturnValue(event);
    });

    const event: GithubEvent = { name: 'ping', payload: pingEventPayload };

    it('validates the event', () => {
      const request = buildHttpRequest();

      handler(request.rawBody, request.headers);

      expect(mockEventValidator.validate).toHaveBeenCalledWith(
        event,
        mockLogger
      );
    });

    describe('when the event is found to be valid', () => {
      beforeEach(() => {
        mockEventValidator.validate.mockReturnValue([]);
      });

      it('returns OK', () => {
        const request = buildHttpRequest();

        expect(
          handler(request.rawBody, request.headers) //
        ).toHaveProperty('statusCode', 200);
      });

      it('responds with a positive summary', () => {
        const request = buildHttpRequest();

        const { body } = handler(request.rawBody, request.headers);

        expect(body).toHaveProperty(
          'summary',
          expect.stringContaining('success!')
        );
      });
    });

    describe('when the event is found to be invalid', () => {
      beforeEach(() => {
        mockEventValidator.validate.mockReturnValue([oneOfError()]);
      });

      it('returns with a 422', () => {
        const request = buildHttpRequest();

        expect(
          handler(request.rawBody, request.headers) //
        ).toHaveProperty('statusCode', 422);
      });

      it('includes the errors in the response', () => {
        const request = buildHttpRequest();

        const { body } = handler(request.rawBody, request.headers);

        expect(body).toHaveProperty('errors', [oneOfError()]);
      });
    });
  });

  describe('when there is an error', () => {
    beforeEach(() => {
      getEventMock.mockImplementation(() => {
        throw new Error('oh noes!');
      });
    });

    it('sends a message to slack with the stack trace', () => {
      const request = buildHttpRequest();

      handler(request.rawBody, request.headers);

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(mockNotifier.prototype.send).toHaveBeenCalledWith({
        text: expect.stringContaining('oh noes!') as string
      });
    });

    it('returns a 500', () => {
      const request = buildHttpRequest();

      expect(
        handler(request.rawBody, request.headers) //
      ).toHaveProperty('statusCode', 500);
    });

    describe("when the error doesn't have a stack", () => {
      beforeEach(() => {
        getEventMock.mockImplementation(() => {
          const error = new Error("oh noes, we don't have a stack trace!");

          delete error.stack;

          throw error;
        });
      });

      it('uses the message instead', () => {
        const request = buildHttpRequest();

        handler(request.rawBody, request.headers);

        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(mockNotifier.prototype.send).toHaveBeenCalledWith({
          text: expect.stringContaining(
            "oh noes, we don't have a stack trace!"
          ) as string
        });
      });
    });
  });
});
