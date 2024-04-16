// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-plugin-api'
import './cadastro_commands'
import './login_commands'
import './documentos_commands'
import './compartilhados_commands'
import './compartilharDiagramas_commands'
import './alterarDiagrama_commands'
import './excluirDiagramas_commands'
import './exportarDiagrama_commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')