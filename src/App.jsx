import {Routes, Route} from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import Navbar from './Components/Navbar/Navbar';
import PostPage from './Components/PostPage/PostPage';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path= '/' element={<Posts />}/>
        <Route path='/posts/:subreddit/:id' element={<PostPage/>} />
      </Routes>
    </>
  )
}

export default App
