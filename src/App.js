import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import FilteredVideoPage from './components/FilteredVideoPage';
import SearchPage from './components/SearchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
      {
        path: '/filter',
        element: <FilteredVideoPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ],
  }, // this will go wherever my outlet is.
]);

// outlet is inside body. and main container and watchpage will be in children.

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
