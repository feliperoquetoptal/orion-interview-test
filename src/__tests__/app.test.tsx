import '@testing-library/jest-dom/extend-expect';
import { App } from '../app';
import { render, screen } from '../utils/test-utils';

describe('<App />', () => {
  it('should render succesfully', async () => {
    render(<App />);
    expect(screen.getByText('Jokes List')).toBeInTheDocument();
  });
});
