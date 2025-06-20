import type { AuthorAssociation, Reactions, User } from '.';
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Discussion {
  repository_url: string;
  category: {
    id: number,
    repository_id: number,
    emoji: string,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
    slug: string,
    is_answerable: boolean
  };
  answer_html_url: string | null;
  answer_chosen_at: string | null;
  answer_chosen_by: User | null;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  /**
   * The discussion post's title.
   */
  title: string;
  user: User;
  state: 'converting' | 'locked' | 'open';
  locked: boolean;
  comments: number;
  created_at: string;
  updated_at: string;
  author_association: AuthorAssociation;
  active_lock_reason: string | null;
  /**
   * The discussion post's body text.
   */
  body: string;
  reactions?: Reactions;
}
