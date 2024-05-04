describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=706d7c2048f946f182f20dbcebd8196b', {
      statusCode: 200,
      body: {
        'articles': [
          {
            "source": {
                "id": null,
                "name": "Tampa Bay Times"
            },
            "author": "Romy Ellenbogen",
            "title": "If Florida votes for abortion, marijuana, will lawmakers abide? - Tampa Bay Times",
            "description": "The two amendments, which will appear on the November ballot, are opposed by Florida’s Republican leaders.",
            "url": "https://www.tampabay.com/news/florida-politics/2024/04/29/florida-abortion-amendment-marijuana-legalize-legislature-desantis-2024/",
            "urlToImage": "https://www.tampabay.com/resizer/r_r_sz7RO4dCUhjzlIYljozWOh0=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/O3TACWAAOY5TUTOOQNLR223LRQ.jpg",
            "publishedAt": "2024-04-29T13:26:48Z",
            "content": "TALLAHASSEE Supporters of a Florida amendment that would protect abortion access have already passed several hurdles, including getting nearly one million petitions and a signoff from the states cons… [+6948 chars]"
          },
          {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Suns tried to build a superteam for an NBA that no longer exists - CBS Sports",
            "description": "Talent no longer trumps all in the 2024 NBA, and the Suns have a bleak future because of it",
            "url": "https://www.cbssports.com/nba/news/suns-tried-to-build-a-superteam-for-an-nba-that-no-longer-exists/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/04/29/a078b521-d646-4bc4-8ec4-d81cbe1ebbd8/thumbnail/1200x675/90e115da2d0e891ef0ee9aa53d27e76c/kevin-durant-suns-g.jpg",
            "publishedAt": "2024-04-29T13:24:00Z",
            "content": "It might not seem like it considering their embarrassing first-round exit (a 4-0 sweep to the Timberwolves), but the easiest historical comparison for the 2023-24 Phoenix Suns, by far, would be the 2… [+11335 chars]"
          },
          {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Marlene Lenthang",
            "title": "Columbia University president says negotiations with protesters have stalled, school will not divest from Israel - NBC News",
            "description": "Columbia University’s president said Monday that talks with student organizers had failed to reach an agreement, and that the university will not divest from Israel — a demand that has sparked protests on college campuses across the country.",
            "url": "https://www.nbcnews.com/news/us-news/columbia-university-president-says-negotiations-protesters-stalled-sch-rcna149755",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-04/240429-columbia-university-gaza-protest-mn-0850-5f83d9.jpg",
            "publishedAt": "2024-04-29T13:08:28Z",
            "content": "Columbia Universitys president said Monday that talks with student organizers had failed to reach an agreement, and that the university will not divest from Israel a demand that has sparked protests … [+3496 chars]"
          },
          {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Humza Yousaf resigns as Scotland’s first minister | News - Al Jazeera English",
            "description": "Yousaf’s decision comes as he faces defeat in two forthcoming confidence votes brought by opposition parties.",
            "url": "https://www.aljazeera.com/news/2024/4/29/scotlands-first-minister-humza-yousaf-resigns",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/04/2024-04-29t115034z_127133470_rc2bg7ae10iv_rtrmadp_3_scotland-snp-government-yousaf_720-1714395748.jpg?resize=1200%2C675",
            "publishedAt": "2024-04-29T12:49:32Z",
            "content": "Humza Yousaf has resigned as the Scottish National Party (SNP) leader and Scotlands first minister.\r\nThe move comes soon after Yousaf ended the SNPs alliance with the Scottish Greens, which triggered… [+2351 chars]"
        }
        ]
      }
    })
  })
  it('visits page and verifies elements', () => {
    cy.visit('http://localhost:3000/')
    .get('h1').contains(" all the news that's fit to print • NEWSREADER • all the news that's fit to print • NEWSREADER • all the news that's fit to print • NEWSREADER • all the news that's fit to print")
    .get('.top-story-container').find('img').should('have.attr', 'src').should('include', 'https://www.tampabay.com/resizer/r_r_sz7RO4dCUhjzlIYljozWOh0=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/O3TACWAAOY5TUTOOQNLR223LRQ.jpg')
    .get('.top-story-container').contains('h3', "If Florida votes for abortion, marijuana, will lawmakers abide? - Tampa Bay Times")
    .get('.top-story-container').contains('p', "2024-04-29T13:26:48Z")
    .get('.top-story-container').contains('p', "The two amendments, which will appear on the November ballot, are opposed by Florida’s Republican leaders.")
    .get('.top-story-container').contains('button', "Read Full Article")

    .get('.selector-container').contains('h4', 'In Other News')
    .get('.selector-container').contains('p', 'sort by:')
    .get('.selector-container').contains('select', 'Date')
    .get('select').select('Title').should('have.value', 'title')
    .get('select').select('Source').should('have.value', 'source')
    .get('select').select('Date').should('have.value', 'date')

    .get('.articles-container').children().should("have.length", 3)
    .get('.articles-container').children().first().find('img').should('have.attr', 'src').should('include', 'https://sportshub.cbsistatic.com/i/r/2024/04/29/a078b521-d646-4bc4-8ec4-d81cbe1ebbd8/thumbnail/1200x675/90e115da2d0e891ef0ee9aa53d27e76c/kevin-durant-suns-g.jpg')
    .get('.articles-container').children().first().contains('p', '2024-04-29T13:24:00Z')
    .get('.articles-container').children().first().contains('h5', 'Suns tried to build a superteam for an NBA that no longer exists - CBS Sports')
    .get('.articles-container').children().first().contains('p', 'Talent no longer trumps all in the 2024 NBA, and the Suns have a bleak future because of it')
    .get('.articles-container').children().first().contains('button', 'Read Article')
    
    .get('.articles-container').children().last().find('img').should('have.attr', 'src').should('include', 'https://www.aljazeera.com/wp-content/uploads/2024/04/2024-04-29t115034z_127133470_rc2bg7ae10iv_rtrmadp_3_scotland-snp-government-yousaf_720-1714395748.jpg?resize=1200%2C675')
    .get('.articles-container').children().last().contains('p', '2024-04-29T12:49:32Z')
    .get('.articles-container').children().last().contains('h5', 'Humza Yousaf resigns as Scotland’s first minister | News - Al Jazeera English')
    .get('.articles-container').children().last().contains('p', 'Yousaf’s decision comes as he faces defeat in two forthcoming confidence votes brought by opposition parties.')
    .get('.articles-container').children().last().contains('button', 'Read Article')
  })

  it('sorts articles with selector', () => {
    cy.visit('http://localhost:3000/')
    .get('select').select('Title')
    .get('.top-story-container').contains('h3', "Columbia University president says negotiations with protesters have stalled, school will not divest from Israel - NBC News")
    .get('.articles-container').children().first().contains('h5', 'Humza Yousaf resigns as Scotland’s first minister | News - Al Jazeera English')
    .get('.articles-container').children().last().contains('h5', 'Suns tried to build a superteam for an NBA that no longer exists - CBS Sports')
  
    .get('select').select('Source')
    .get('.top-story-container').contains('h3', "Humza Yousaf resigns as Scotland’s first minister | News - Al Jazeera English")
    .get('.articles-container').children().first().contains('h5', 'Suns tried to build a superteam for an NBA that no longer exists - CBS Sports')
    .get('.articles-container').children().last().contains('h5', 'If Florida votes for abortion, marijuana, will lawmakers abide? - Tampa Bay Times')
  })

  

})