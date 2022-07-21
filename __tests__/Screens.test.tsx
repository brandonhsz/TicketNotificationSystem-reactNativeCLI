import 'react-native';
import React from 'react';

import { render } from '@testing-library/react-native';
import { Escorza, Revolucion, Tlajomulco } from '../src/Pages';

describe("Screens rendering test", () => {
  it('Component Screen Escorza rendering test', () => {
    const push = {
      addListener: jest.fn()
    }
    render(<Escorza navigation={push} />);
  })

  it('Component Screen Revolucion rendering test', () => {
    const push = {
      addListener: jest.fn()
    }
    render(<Revolucion navigation={push} />);
  })

  it('Component Screen Escorza rendering test', () => {
    const push = {
      addListener: jest.fn()
    }
    render(<Tlajomulco navigation={push} />);
  })
})