import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import Ticket from '../src/Components/Ticket';

it('Components Rendering test', () => {
  renderer.create(<Ticket
    TicketAuthor='John Doe'
    TicketNumber='12345'
    TicketTime='12:00'
    TicketBranch='Branch 1'
    TicketSubjet='Subject 1'
  />);
});
