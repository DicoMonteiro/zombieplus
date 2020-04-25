
// Suite de testes para serem executados todos os nossos cenários de validações das funcionalidades

module.exports = {

    '@tags': ['smoke', 'senhaInvalida'],
    // Para desabilitar a suite de teste e nao ser executado
    // '@disabled': true,
    // before : (browser) => {
    //     browser.resizeWindow(1920, 1080)
    // },

    // after : (browser) => {
    //     browser.end();
    // },

    'login com senha invalida': function (browser) {
        // Fazendo a instanciação do arquivo page para ser consumida no cenário de testes
        let login = browser.page.login()

        login
            // Pegando a função loginActions criada dentro da page login.js
            .with('didico@ninjazombie.com', 'test123')
            .expectAlert('@userError', 'Usuário e/ou senha inválidos')
            // Pegando os elementos criado dentro da page login.js no module.exports
            // .navigate()
            // .waitForElementVisible('@form', 3000)
            // .assert.titleContains('ZombiePlus')
            // .assert.visible('@emailInput')
            // .setValue('@emailInput', 'didico@ninjazombie.com')
            // .setValue('@passInput', 'test123')
            // .assert.visible('@loginButton')
            // .click('@loginButton')
            // .waitForElementVisible('@userError', 3000)
            // .assert.containsText('@userError', 'Usuário e/ou senha inválidos')

    }
}