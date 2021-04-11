import { WebhookEventName } from '@octokit/webhooks-types';
import { OneOfError } from 'ajv/dist/vocabularies/applicator/oneOf';
import { mocked } from 'ts-jest/utils';
import { handler } from '../../src';
import { EventValidator, GithubEvent, getEvent } from '../../src/github';
import { pingEventPayload } from '../fixtures';

jest.mock('../../src/notifier');
jest.mock('../../src/github/getEvent');
jest.mock('../../src/github/EventValidator');

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
  params: { passingSchemas: null },
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
      getEventMock.mockResolvedValue(event);
    });

    const event: GithubEvent = { name: 'ping', payload: pingEventPayload };

    it('validates the event', async () => {
      const request = buildHttpRequest();

      await handler(request.rawBody, request.headers);

      expect(mockEventValidator.validate).toHaveBeenCalledWith(
        event,
        mockLogger
      );
    });

    describe('when the event is found to be valid', () => {
      beforeEach(() => {
        mockEventValidator.validate.mockReturnValue([]);
      });

      it('returns OK', async () => {
        const request = buildHttpRequest();

        await expect(
          handler(request.rawBody, request.headers) //
        ).resolves.toHaveProperty('statusCode', 200);
      });

      it('responds with a positive summary', async () => {
        const request = buildHttpRequest();

        const { body } = await handler(request.rawBody, request.headers);

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

      it('returns with a 422', async () => {
        const request = buildHttpRequest();

        await expect(
          handler(request.rawBody, request.headers) //
        ).resolves.toHaveProperty('statusCode', 422);
      });

      it('includes the errors in the response', async () => {
        const request = buildHttpRequest();

        const { body } = await handler(request.rawBody, request.headers);

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

    it('returns a 500', async () => {
      const request = buildHttpRequest();

      await expect(
        handler(request.rawBody, request.headers) //
      ).resolves.toHaveProperty('statusCode', 500);
    });
  });
});
