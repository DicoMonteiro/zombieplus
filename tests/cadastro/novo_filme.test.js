
import pg from '../../lib/db'

let movieData = []

module.exports = {

    // '@tags': ['smoke', 'cadastro'],

    before: function (browser) {
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Mila Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }
        
        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('didico@ninjazombie.com', 'pwd123')
        sidebar
            .expectInfo('@userInfo', 'Adriano Almeida')
    },

    // 'dado que eu tenha um novo filme': function (browser) {
    //     movieData = {
    //         title: 'Resident Evil',
    //         status: 'Disponível',
    //         year: 2002,
    //         releaseDate: '01/05/2002',
    //         cast: ['Mila Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
    //         cover: 'resident-evil-2002.jpg',
    //         plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
    //     }
        
    // },
    'quando eu faço o cadastro do filme': function (browser) {
        // console.log(movieData)
        let movie = browser.page.movie()

        movie
            // .click('@addMovieButton')
            // .waitForElementVisible('@movieForm', 3000)
            .createForm()
            .setValue('@titleInput', movieData.title)
            // .click('@statusSelect')
            // .useXpath()
            // .waitForElementVisible(`//li//span[contains(text(), "${movieData.status}")]`, 2000)
            // .click(`//li//span[contains(text(), "${movieData.status}")]`)
            // .useCss()
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            // .setValue('@releaseDateInput', movieData.releaseDate)
            // .api.keys(movie.api.Keys.TAB)
            .insertDate(movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotTextarea', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')
            // .pause(10000)
    },

    'então devo ver o filme na lista': function (browser) {
        let movie = browser.page.movie()

        // O uso do waitForElementVisible procura o elemento na página, mas
        // também procura pelo Atributo display (podendo quebrar por não encontrar o display)

        // O uso do waitForElementPresent, verifica se o elemento esta na página
        // (em algum lugar da página) 

        movie
            // .waitForElementVisible('@listMovies', 5000)
            .waitForElementPresent('@listMovies', 5000)
            .assert.containsText('@listMovies', movieData.title)
    }
}