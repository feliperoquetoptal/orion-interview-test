import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query';
import jokesReducer from '../redux/jokes';

const queryClient = new QueryClient();
const history = createMemoryHistory();

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { jokes: jokesReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <IntlProvider locale={'en'}>
            <Provider store={store}>{children}</Provider>
          </IntlProvider>
        </Router>
      </QueryClientProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
