import './App.css'
import {MainPage} from '../MainPage/MainPage'
import {FullArticle} from '../FullArticle/FullArticle'
import {Route, Routes} from 'react-router-dom'
import {dummyData} from '../../dummy-data/dummyData'
import {useState, useEffect} from 'react'
import { getArticles } from '../../apiCalls'
import {Header} from '../Header/Header'
import Error from '../Error/Error'

function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const preppedData = dummyData.articles.map((article, index) => {
      article.id = index
      return article
    })

    // getArticles()
    // .then(data => {
    //       const filteredData = data.articles.filter((article) => {
    //         return article.content != ('[Removed]')
    //       })
    //   const preppedData = filteredData.map((article, index) => {
    //     article.id = index
    //     return article
    //   })
    //   console.log(preppedData)
      setArticles(preppedData)
    // })
    // .catch(err => setError(err.message))

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
      <Header />
      {error ? <Error message='something went wrong. Try again later.' />
        :
        <Routes>
          <Route path='/' element={<MainPage articles={articles} sortArticles={sortArticles}/>} />
          <Route path='/article/:id' element={<FullArticle articles={articles} />} />
          <Route path="*" element={<Error message='invalid path'/>} />
        </Routes>
      }
    </>
  );
}

export default App;