
var dashboardView = {
    expectInfo: function (element,text) {
        return this
            .waitForElementVisible(element, 3000)
            .assert.containsText(element, text)
    }
} 

module.exports = {
    commands: [dashboardView],
    elements: {
        userInfo: '.user .info span'
    }
}