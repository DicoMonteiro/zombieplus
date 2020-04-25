
// Criando uma função, um framework para facilitar a implementação e chamada nos cenários de testes
var loginActions = {
    with: function (username, password) {
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .assert.titleContains('ZombiePlus')
            .assert.visible('@emailInput')
            .setValue('@emailInput', username)
            .setValue('@passInput', password)
            .assert.visible('@loginButton')
            .click('@loginButton')
    },
    expectAlert: function (element,text) {
        return this
            .waitForElementVisible(element, 3000)
            .assert.containsText(element, text)
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
        userError: '.alert-danger',
        userAlert: '.alert-info'
    }
}