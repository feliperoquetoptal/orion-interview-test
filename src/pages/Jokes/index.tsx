import Switch from '@material-ui/core/Switch';
import Skeleton from 'react-loading-skeleton';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { FiThumbsUp } from 'react-icons/fi';
import { JokeComponent } from '../../components/Joke';
import { fetchJokes } from '../../integration/jokes';
import * as Styled from '../../styled';
import { Joke } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux';
import { LIKE_JOKE_ACTION, DISLIKE_JOKE_ACTION } from '../../redux/jokes';
import { messages } from '../../components/Intl/messages';

export function JokesPage(): JSX.Element {
  const [onlyLiked, setOnlyLiked] = useState(false);
  const toggleOnlyLiked = () => setOnlyLiked(!onlyLiked);

  const dispatch = useAppDispatch();
  const likedJokes = useAppSelector(state => state.jokes.likedJokes);
  const likedJokeIds = useAppSelector(state => state.jokes.likedJokeIds);
  const dislikedJokeIds = useAppSelector(state => state.jokes.dislikedJokeIds);

  const response = useQuery('jokes', fetchJokes, { refetchOnWindowFocus: false });
  const jokes = onlyLiked ? likedJokes : response.data as Joke[];

  const Header = () => (
    <Styled.Row $spaceBetween>
      <Styled.Title $bold>
        <FormattedMessage {...messages.jokes} />
      </Styled.Title>
      <Styled.Row>
        <FiThumbsUp size='12px' />
        <Switch
          inputProps={{ 'data-testid': 'toggle-only-liked' } as unknown as React.InputHTMLAttributes<HTMLInputElement>}
          checked={onlyLiked}
          onChange={toggleOnlyLiked}
        />
      </Styled.Row>
    </Styled.Row>
  );

  const Results = () => {
    if (response.isLoading) return <Skeleton count={10} />
    if (response.isError || !jokes || !jokes.map) return <Styled.Subtitle> <FormattedMessage {...messages.error} /></Styled.Subtitle>
    return (
      <Styled.List data-testid='jokes-list'>
        {jokes.map((joke) => (
          <JokeComponent
            key={joke.id}
            joke={joke}
            liked={likedJokeIds.includes(joke.id)}
            disliked={dislikedJokeIds.includes(joke.id)}
            onLike={(joke) => dispatch({ type: LIKE_JOKE_ACTION, payload: joke })}
            onDislike={(joke) => dispatch({ type: DISLIKE_JOKE_ACTION, payload: joke })}
          />
        ))}
      </Styled.List>
    );
  }

  return (
    <Styled.Page>
      <Header />
      <Results />
    </Styled.Page>
  );
}
