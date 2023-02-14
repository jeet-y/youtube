import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head'
import store from './utils/store'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className='overflow-hidden'>
        <Head />
        <RouterProvider router={appRouter}>
          <Outlet />
        </RouterProvider>
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
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