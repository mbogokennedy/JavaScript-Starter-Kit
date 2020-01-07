import { random } from "json-schema-faker";

/* eslint-disable quote-props */

// eslint-disable-next-line import/prefer-default-export
export const schema = {
  'type': 'object',
  'properties': {
    'users': {
      'type': 'array',
      'minItems': 7,
      'maxItems': 10,
      'items': {
        'type': 'object',
        'properties': {
          'id': {
            'type': 'string',
            'unique': true,
            'faker': 'random.uuid'
          },
          'firstName': {
            'type': 'string',
            'faker': 'name.firstName'
          },
          'lastName': {
            'type': 'string',
            'faker': 'name.lastName'
          },
          'email': {
            'type': 'string',
            'faker': 'internet.email'
          },
          'userName': {
            'type': 'string',
            'faker': 'internet.userName'
          },
        },
        'required': ['id', 'firstName', 'lastName', 'email']
      }
    }
  },
  'required': ['users']
};
