import './App.css';
import Navbar from './component/Navbar';
import Feed from "./component/Feed";
import SearchResults from "./component/SearchResults";
import VideoDetails from "./component/VideoDetails"
import { AppContext } from './context/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed/>} />
        <Route path='/search/:searchQuery' element={<SearchResults/>} />
        <Route path='/video/:id' element={<VideoDetails/>} />
      </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
