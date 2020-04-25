

module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1400, 900)
        // browser.maximizeWindow()
        done()
    },

    afterEach: (browser, done) => {
        browser.end()
        done()
    },
}