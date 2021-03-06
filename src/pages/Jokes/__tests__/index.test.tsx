import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { JokesPage } from '../'
import { fireEvent, render, screen, waitFor } from '../../../utils/test-utils';
import { JOKE_API_URL } from '../../../utils/constants';
import mockJokes from './jokes.json';

describe('<JokesPage />', () => {
  describe('Results', () => {
    const successfulJokesRequest = rest.get(JOKE_API_URL, (_req, res, ctx) => res(ctx.json(mockJokes)));
    const server = setupServer(successfulJokesRequest);
    beforeAll(() => server.listen());
    beforeEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('should render jokes list', async () => {
      render(<JokesPage />);
      expect(screen.getByText('Jokes List')).toBeInTheDocument();
      await waitFor(() => screen.getByTestId('jokes-list'));
      await expect(screen.queryByTestId('jokes-list')).toBeInTheDocument();
      await expect(screen.queryByText(mockJokes[0].setup)).toBeInTheDocument();
    });
    it('should liked and dislike jokes', async () => {
      render(<JokesPage />);
      await waitFor(() => screen.getByTestId('jokes-list'));

      // should be showing all jokes from the network response.
      expect(screen.queryAllByTestId('joke').length).toEqual(mockJokes.length);

      // should like and dislike some jokes
      fireEvent.click(screen.queryAllByTestId('like-button')[4]);
      fireEvent.click(screen.queryAllByTestId('like-button')[4]);
      fireEvent.click(screen.queryAllByTestId('dislike-button')[5]);
      fireEvent.click(screen.queryAllByTestId('dislike-button')[5]);
      fireEvent.click(screen.queryAllByTestId('like-button')[7]);
      fireEvent.click(screen.queryAllByTestId('dislike-button')[7]);

      // after liking and toggling only liked, should only show one liked joke.
      fireEvent.click(screen.queryAllByTestId('like-button')[1]);
      fireEvent.click(screen.queryAllByTestId('toggle-only-liked')[0]);
      expect(screen.queryAllByTestId('joke').length).toEqual(1);

      // after disliking should not show any jokes.
      fireEvent.click(screen.queryAllByTestId('dislike-button')[0]);
      expect(screen.queryAllByTestId('joke').length).toEqual(0);
    });
  })
});
