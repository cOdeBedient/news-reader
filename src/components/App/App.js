import './App.css'
import {TopArticle} from '../TopArticle/TopArticle'
import {Articles} from '../Articles/Articles'
import {dummyData} from '../../dummy-data/dummyData'
import {useState, useEffect} from 'react'

function App() {
const [articles, setArticles] = useState([])

useEffect(() => {
  setArticles(dummyData.articles)
}, [])


  return (
    <>
      <header>
        <h1>News Reader</h1>
        <img src='/assets/news-stock.jpg' alt="stock news image"/>
      </header>
      <TopArticle articles={articles}/>
      <Articles articles={articles}/>
    </>
  );
}

export default App;
