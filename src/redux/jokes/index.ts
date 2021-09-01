import { PayloadAction } from '@reduxjs/toolkit'
import { Joke } from "../../types";

type State = {
  likedJokes: Joke[],
  likedJokeIds: number[],
  dislikedJokeIds: number[],
};

const initialState: State = {
  likedJokes: [],
  likedJokeIds: [],
  dislikedJokeIds: [],
};

export const LIKE_JOKE_ACTION = 'LIKE_JOKE_ACTION';
export const DISLIKE_JOKE_ACTION = 'DISLIKE_JOKE_ACTION';

export default function reducer(state = initialState, action: PayloadAction<Joke>): State {
  switch (action.type) {

    case LIKE_JOKE_ACTION: {
      const jokeId = action.payload.id;
      const likedJokes = [...state.likedJokes].filter((joke) => joke.id !== jokeId);
      const likedJokeIds = [...state.likedJokeIds].filter((id) => id !== jokeId);
      const dislikedJokeIds = [...state.dislikedJokeIds].filter((id) => id !== jokeId);
      if (!state.likedJokeIds.includes(jokeId)) {
        likedJokes.push(action.payload);
        likedJokeIds.push(jokeId);
      }
      return {
        ...state,
        likedJokes,
        likedJokeIds,
        dislikedJokeIds,
      };
    }

    case DISLIKE_JOKE_ACTION: {
      const jokeId = action.payload.id;
      const likedJokes = [...state.likedJokes].filter((joke) => joke.id !== jokeId);
      const likedJokeIds = [...state.likedJokeIds].filter((id) => id !== jokeId);
      const dislikedJokeIds = [...state.dislikedJokeIds].filter((id) => id !== jokeId);
      if (!state.dislikedJokeIds.includes(jokeId)) {
        dislikedJokeIds.push(jokeId);
      }
      return {
        ...state,
        likedJokes,
        likedJokeIds,
        dislikedJokeIds,
      };
    }

    default:
      return state

  }
}
