
import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Comments from './components/Comments';

const appRouter=createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
    path:"/",
    element: <VideoContainer/>
    },
    {
      path:"/watch",
      element: <WatchPage/>
    }

  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>

     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
