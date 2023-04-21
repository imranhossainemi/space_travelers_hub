import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

it('test navbar render', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  const navbars = screen.getAllByRole('link');
  expect(navbars).toHaveLength(3);
  expect(tree).toMatchSnapshot();
});
