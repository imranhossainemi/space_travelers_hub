import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from 'Components/header/Header';

it('test navbar render', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>,
    )
    .toJSON();
  const navbars = screen.getAllByRole('link');
  expect(navbars).toHaveLength(3);
  expect(tree).toMatchSnapshot();
});
