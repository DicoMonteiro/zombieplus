
// Criando uma função, um framework para facilitar a implementação e chamada nos cenários de testes
var loginActions = {
    with: function (username, password) {
        return this
            .navigate()
            .waitForElementVisible('@form', 10000)
            .assert.titleContains('ZombiePlus')
            // .assert.visible('@emailInput')
            .setValue('@emailInput', username)
            .setValue('@passInput', password)
            // .assert.visible('@loginButton')
            .click('@loginButton')
    },
    expectAlertDanger: function (text) {
        return this
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', text)
    },

    expectAlertInfo: function (text) {
        return this
            .waitForElementVisible('@alertInfo', 10000)
            .assert.containsText('@alertInfo', text)
    }
}

module.exports = {
    // url: 'http://zombie-web:5000/login',
    url: '/login',
    // O campo commands serve para ajudar a invocar a função criada para encapsular os dados e iterações
    // deixando os cenários de testes mais limpos e simples
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput:  '#emailId',
        passInput: '#passId',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}