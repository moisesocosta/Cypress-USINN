# Cypress-USINN

### Passo a passo
1. Clone o repositório do backend: `git clone https://github.com/moisesocosta/Cypress-USINN`
3. Importe o projeto em sua IDE preferida.
4. Instale as dependências
```bash
$ npm install
```
5. Executa o Cypress
```bash
$ npx cypress open
```
### Gravação dos testes
```bash
$ npx cypress run
```
### Gravação de testes específicos
```bash
$ npx cypress run --spec cypress/e2e/**/**.cy.js
```
## Run tests
```shell
$ docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.3.0
# runs Cypress tests from the current folder
```