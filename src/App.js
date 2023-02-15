import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import MainContainer from './components/MainContainer'
import WatchContainer from './components/WatchContainer'
import store from './utils/store'

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

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
        element: <WatchContainer />,
      }
    ]
  }
])

export default App;






/**
 * Head
 * Body
 *  -SideBar
 *  -MainContainer
 *    -FilterButtonList
*        -FilterButton
 *    -VideoContainer
 *        -VideoCard
 * 
 *  
 */