

module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1400, 900)
        // browser.maximizeWindow()
        done()
    },

    afterEach: (browser, done) => {

        const faker = require('faker')

        let shopPath = `./tests_output/screenshots/${faker.random.uuid()}.png`

        browser
            .saveScreenshot(shopPath, function () {
                const assertions = browser.currentTest.results.assertions || [];
                if (assertions.length > 0) {
                    const currentAssertion = assertions[assertions.length-1];
                    if (currentAssertion) {
                        currentAssertion.screenshots = currentAssertion.screenshots || [];
                        currentAssertion.screenshots.push(shopPath);
                    }
                }
            })
            .end()
        done()
    },
}