import pg from '../../lib/db'

let movieData = []

module.exports = {
    '@tags': ['smoke', 'pesquisar'],

    before: function (browser) {
        movieData = {
            title: 'Meu Namorado é um Zumbi',
            status: 'Disponível',
            year: 2013,
            releaseDate: '01/05/2013',
            cast: ['Nicholas Hoult', 'Teresa Palmer', 'Analeign Tipton', 'Rob Corddy'],
            cover: 'meu-namo-zumbi.jpg',
            plot: 'Em um mundo pós-apocalíptico, um zumbi romântico se apaixona por uma humana.'
        }

        pg.removeByTitle(movieData.title).then(function () {
            pg.insertMovie(movieData)
        })
       

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('didico@ninjazombie.com', 'pwd123')
        sidebar
            .expectLoggedUser('Adriano Almeida')
    },

    'quando eu faço a busca pelo título': function (browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', movieData.title)
            .click('@searchIcon')
            // .pause(10000)
    },

    'então o título buscado deve ser exibido na lista': function (browser) {
        let movie = browser.page.movie()
        movie
            .waitForElementPresent('@listMovies', 10000)
            .waitForElementPresent('@listTr', 10000)
            .assert.containsText('@listMovies', movieData.title)
        movie
            .expect.elements('@listTr').count.to.equal(1)
    }
}