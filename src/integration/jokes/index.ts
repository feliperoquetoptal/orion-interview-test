import axios from 'axios';
import { Joke } from '../../types';
import { JOKE_API_URL } from '../../utils/constants';

export function fetchJokes(): Promise<Joke[]> {
  return axios.get(JOKE_API_URL).then((response) => response.data);
}
