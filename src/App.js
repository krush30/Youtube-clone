import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Head from './component/Head';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './component/WatchPage';
import MainComponent from './component/MainComponent';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [

        {
          path: "/watch",
          element: <WatchPage />
        },
        {
          path: "/",
          element: <MainComponent />
        }
      ]
    },

  ])

  return (
    <div className="">
      <Provider store={appStore}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>

    </div>
  );
}

export default App;
