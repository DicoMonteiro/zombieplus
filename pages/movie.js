

var createActions = {
    createForm: function () {
        return this
            .click('@addMovieButton')
            .waitForElementVisible('@movieForm', 10000)
    },
    
    selectStatus: function (status) {
        return this
            .click('@statusSelect')
            .useXpath()
            .waitForElementVisible(`//li//span[contains(text(), "${status}")]`, 10000)
            .click(`//li//span[contains(text(), "${status}")]`)
            .useCss()
    },

    insertDate: function (releaseDate) {
        const browser = this
        
        browser
            .setValue('@releaseDateInput', releaseDate)
            .api.keys(browser.api.Keys.TAB)
        
        return this
    },

    insertCast: function (cast) {

        const browser = this

        cast.forEach(function (actor) {
            browser
                .setValue('@castInput', actor)
                .api.keys(browser.api.Keys.TAB)
        })

       return this.pause(1000)
    },

    uploadCover: function (fileName) {
        let fullPath = require('path').resolve(__dirname, '../images/' + fileName)
        
        // console.log(fullPath)
        
        return this
            .setValue('@coverUpload', fullPath)
            .pause(1000)
            .assert.attributeContains('.picture-src', 'src', 'blob')
    }

}


module.exports = {
    commands: [createActions],
    elements: {
        addMovieButton: '.movie-add',
        searchInput: 'input[placeholder^=Pesquisar]',
        searchIcon: '#search-movie',
        movieForm: '#movie-form',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        releaseDateInput: 'input[name=release_date]',
        castInput: '.cast',
        plotTextarea: 'textarea[name=overview]',
        coverUpload: '#upcover',
        createButton: '#create-movie',
        listMovies: 'table tbody',
        listTr: 'table tbody tr',
        alertDanger: '.alert-danger'
    }
}