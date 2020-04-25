
// Suite de testes para serem executados todos os nossos cenários de validações das funcionalidades

module.exports = {
    '@tags': ['smoke', 'loginPO'],

    // Para desabilitar a suite de teste e nao ser executado
    // '@disabled': true,

    // before : (browser) => {
    //     browser.resizeWindow(1920, 1080)
    // },

    // after : (browser) => {
    //     browser.end();
    // },

    'login com sucesso Page Object': function (browser) {
        // Fazendo a instanciação do arquivo page para ser consumida no cenário de testes
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        // browser.resizeWindow(1920, 1080)
        // URL função responsável por abrir o browser e execute a url
        login
            // Pegando a função loginActions criada dentro da page login.js
            .with('didico@ninjazombie.com', 'pwd123')
            // Pegando os elementos criado dentro da page login.js no module.exports
            // .navigate()
            // .waitForElementVisible('@form', 3000)
            // .assert.titleContains('ZombiePlus')
            // .assert.visible('@emailInput')
            // .setValue('@emailInput', 'didico@ninjazombie.com')
            // .setValue('@passInput', 'pwd123')
            // .assert.visible('@loginButton')
            // .click('@loginButton')

        sidebar
            .waitForElementPresent('@userInfo', 5000)
            .expectInfo('@userInfo', 'Adriano Almeida')
            
    }

}