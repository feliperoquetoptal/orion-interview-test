import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { JokesPage } from '../'
import { render, screen, waitFor } from '../../../utils/test-utils';
import { JOKE_API_URL } from '../../../utils/constants';

describe('<JokesPage />', () => {
  describe('Errors', () => {
    const failedJokesRequest = rest.get(JOKE_API_URL, (_req, res, ctx) => res((ctx.status(500), ctx.json({ message: 'Error' }))));
    const server = setupServer(failedJokesRequest);
    beforeAll(() => server.listen());
    beforeEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('should render error message', async () => {
      jest.mock('axios', () => ({ get: () => { throw new Error("Expected") } }));
      render(<JokesPage />);
      expect(screen.getByText('Jokes List')).toBeInTheDocument();
      await waitFor(() => screen.getByText('Something went wrong :('));
      expect(screen.getByText('Something went wrong :(')).toBeInTheDocument();
    });
  });
});
