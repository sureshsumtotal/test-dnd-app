import React from 'react';
import { expect, test, render } from '@jest/globals';
import SimpleDnd from './SimpleDnd';

describe('SimpleDnd', () => {
it('should render ControlPanelTable with data', () => {
    const { container } = render(
      <SimpleDnd />
    );
    expect(container).toBeDefined();
  });

});