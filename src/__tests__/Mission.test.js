import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const MissionTable = () => (
  <div>
    <h1>Mission Table</h1>
  </div>
);

describe('MissionTable', () => {
  test('render React component', () => {
    render(<MissionTable />);
    expect(screen.getByText('Mission Table')).toBeInTheDocument();
  });
});
