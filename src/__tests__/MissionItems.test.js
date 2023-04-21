import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const MissionItem = () => (
  <div>
    <h1>Mission Item</h1>
  </div>
);

describe('MissionItem', () => {
  test('render React component', () => {
    render(<MissionItem />);
    expect(screen.getByText('Mission Item')).toBeInTheDocument();
  });
});
