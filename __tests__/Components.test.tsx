import 'react-native';
import React from 'react';

import { render } from '@testing-library/react-native';
import Ticket from '../src/Components/Ticket';

describe("Components rendering test", () => {

  it('Component Ticket Rendering test', () => {

    const { getByTestId } = render(
      <Ticket
        TicketAuthor='John Doe'
        TicketNumber='12345'
        TicketTime='12:00'
        TicketSubjet='Subject 1'
      />
    );

    const author = getByTestId('author');
    const number = getByTestId('number');
    const time = getByTestId('time');

    const subject = getByTestId('subject');
    expect(author.props.children.join('')).toBe('Author  : John Doe');
    expect(number.props.children.join('')).toBe('Number  : 12345');
    expect(time.props.children.join('')).toBe('Time    : 12:00');
    expect(subject.props.children.join('')).toBe('Subject : Subject 1');
  });

})
