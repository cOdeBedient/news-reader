describe('error handling', () => {
  it('should display errors for failed fetch', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=706d7c2048f946f182f20dbcebd8196b', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
      .get('h1').contains(" all the news that's fit to print • NEWSREADER • all the news that's fit to print • NEWSREADER • all the news that's fit to print • NEWSREADER • all the news that's fit to print")
      .get('p').contains('Something went wrong. Try again later.')

    
  })

  it('should display error for bad url', () => {
    cy.visit('http://localhost:3000/potato')
      .get('h1').contains(" all the news that's fit to print • NEWSREADER • all the news that's fit to print • NEWSREADER • all the news that's fit to print • NEWSREADER • all the news that's fit to print")
      .get('p').contains('invalid path')
  })
})