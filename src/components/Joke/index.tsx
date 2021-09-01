import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Joke } from '../../types';
import * as Styled from '../../styled';

type JokeComponentProps = {
  joke: Joke;
  liked: boolean;
  disliked: boolean;
  onLike: (joke: Joke) => void;
  onDislike: (joke: Joke) => void;
};

export function JokeComponent({ joke, liked, disliked, onLike, onDislike }: JokeComponentProps): JSX.Element {
  return (
    <Styled.Card data-testid='joke'>
      <Styled.Label>{joke.setup}</Styled.Label>
      <Styled.Label $end>{joke.punchline}</Styled.Label>
      <Styled.Row>
        <Styled.IconButton data-testid='like-button' $green={liked} onClick={() => onLike(joke)}>
          <FiThumbsUp size='12px' />
        </Styled.IconButton>
        <Styled.IconButton data-testid='dislike-button' $red={disliked} onClick={() => onDislike(joke)}>
          <FiThumbsDown size='12px' />
        </Styled.IconButton>
      </Styled.Row>
    </Styled.Card>
  );
}
