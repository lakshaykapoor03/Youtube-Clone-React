
import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';
import Body from './components/Body';
import store from './utils/store';
import Signup from './components/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchResults from './components/SearchResults';

const appRouter=createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
    path:"/",
    element: <VideoContainer/>
    },
    {
    path:"/signup",
    element: <Signup/>
    },
    {
      path:"/header",
      element: <Header/>
      },
    {
      path:"/watch",
      element: <WatchPage/>,
    
    },
    { path:"/results",
    element: <SearchResults/>
    }

  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
