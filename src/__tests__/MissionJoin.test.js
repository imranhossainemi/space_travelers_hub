import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const JoinedMissions = () => (
  <div>
    <h1>Joined</h1>
  </div>
);

describe('Joined Missions', () => {
  test('render React component', () => {
    render(<JoinedMissions />);
    expect(screen.getByText('Joined')).toBeInTheDocument();
  });
});
