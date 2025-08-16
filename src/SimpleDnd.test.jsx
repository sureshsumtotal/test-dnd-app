import React from 'react';
import { expect } from '@jest/globals';
import SimpleDnd from './SimpleDnd';
import { render } from '@testing-library/react';

describe('SimpleDnd', () => {
it('should render ControlPanelTable with data', () => {
    const { container } = render(
      <SimpleDnd />
    );
    expect(container).toBeDefined();
  });

});