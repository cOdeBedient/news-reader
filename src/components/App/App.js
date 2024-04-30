import './App.css'
import {MainPage} from '../MainPage/MainPage'
import {FullArticle} from '../FullArticle/FullArticle'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:title' element={<FullArticle />} />
      </Routes>
    </>
  );
}

export default App;
