import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { LanguageProvider } from './components/Intl';
import { RouterProvider } from './components/Router';
import { store, persistor } from './redux'
import * as Styled from './styled';

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Styled.ThemeComponent>
              <RouterProvider />
            </Styled.ThemeComponent>
          </PersistGate>
        </Provider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};
