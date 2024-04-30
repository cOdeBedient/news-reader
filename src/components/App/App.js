import './App.css'
import {TopArticle} from '../TopArticle/TopArticle'
import {Articles} from '../Articles/Articles'
import {dummyData} from '../../dummy-data/dummyData'
import {useState} from 'react'

function App() {
const [articles, setArticles] = useState([])




  return (
    <>
      <header>
        <h1>News Reader</h1>
        <img src='/assets/news-stock.jpg' alt="stock news image"/>
      </header>
      <TopArticle />
      <Articles />
    </>
  );
}

export default App;
