import React from 'react';
import styled from 'styled-components';

const ValidateMessage = styled.p`
  color: #bf1650;

  &:before {
    display: inline;
    content: '⚠ ';
  }
`;

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <ValidateMessage>This is required</ValidateMessage>;
      case 'minLength':
        return <ValidateMessage>Your last name need minimum 3 charcaters</ValidateMessage>;
      case 'pattern':
        return <ValidateMessage>Enter a valid email address</ValidateMessage>;
      case 'validate':
        return <ValidateMessage>Username is already used</ValidateMessage>;
      default:
        return null;
    }
  }

  return null;
}
