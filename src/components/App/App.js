import './App.css'
import {MainPage} from '../MainPage/MainPage'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route to='/' element={<MainPage />} />

      </Routes>
      </>
  );
}

export default App;
