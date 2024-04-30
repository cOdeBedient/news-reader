import './App.css'
import {MainPage} from '../MainPage/MainPage'
import {FullArticle} from '../FullArticle/FullArticle'
import {Route, Routes} from 'react-router-dom'
import {dummyData} from '../../dummy-data/dummyData'
import {useState, useEffect} from 'react'
import { getArticles } from '../../apiCalls'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const preppedData = dummyData.articles.map((article, index) => {
      article.id = index
      return article
    })

    // getArticles()
    // .then(data => {
    //   const preppedData = data.articles.map((article, index) => {
    //     article.id = index
    //     return article
    //   })

      setArticles(preppedData)
    // })
  }, [])

  function sortArticles(selector) {
    let sortedArticles
    if(selector === 'title') {
      sortedArticles = articles.toSorted((a, b) => {
        return a.title.localeCompare(b.title)
      })
    } else if(selector === 'date') {
        sortedArticles = articles.toSorted((a, b) => {
          return a.publishedAt.localeCompare(b.publishedAt)
        })
    } else {
        sortedArticles = articles.toSorted((a, b) => {
          return a.source.name.localeCompare(b.source.name)
        })
    }

    setArticles(sortedArticles)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage articles={articles} sortArticles={sortArticles}/>} />
        <Route path='/:id' element={<FullArticle articles={articles} />} />
      </Routes>
    </>
  );
}

export default App;
