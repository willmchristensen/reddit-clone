import {Routes, Route} from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path= '/' element={<Posts />}/>
      </Routes>
    </>
  )
}

export default App
