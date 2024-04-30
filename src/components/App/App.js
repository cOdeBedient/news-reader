import './App.css'
import {MainPage} from '../MainPage/MainPage'
import {FullArticle} from '../FullArticle/FullArticle'
import {Route, Routes} from 'react-router-dom'
import {dummyData} from '../../dummy-data/dummyData'
import {useState, useEffect} from 'react'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const preppedData = dummyData.articles.map((article, index) => {
      article.id = index
      return article
    })
    setArticles(preppedData)
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage articles={articles} />} />
        <Route path='/:id' element={<FullArticle articles={articles}/>} />
      </Routes>
    </>
  );
}

export default App;
