
var userActions = {
    expectLoggedUser: function (text) {
        return this
            .waitForElementVisible('@userInfo', 10000)
            .assert.containsText('@userInfo', text)
    }
} 

module.exports = {
    commands: [userActions],
    elements: {
        userInfo: '.user .info span'
    }
}