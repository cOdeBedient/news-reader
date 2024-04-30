function getArticles() {
    return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=706d7c2048f946f182f20dbcebd8196b')
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Failed to load articles')
        }

        return resp.json()
      })
  }

  export { getArticles }