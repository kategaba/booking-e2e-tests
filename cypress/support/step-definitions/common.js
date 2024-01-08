import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { pageSelectors as ps } from '../page-selectors';

Given(/^I login with correct credentials$/, () => {
    const users = require('../../fixtures/userList.json')

    users.forEach((credentials) => {
        cy.intercept('POST', '/dml/graphql?lang=en-us').as('graphql');
        cy.visit(Cypress.config('baseUrl'));
        cy.wait('@graphql').its('response.statusCode').should('eq', 200);
        cy.get('body')
            .then($body => {
                if ($body.find('[aria-modal="true"]').length) {
                    cy.get(ps.common.login.modalWin).click();
                }
    
                return ps.common.login.signInBttn;
            })
            .then(selector => {
                cy.get(selector).click();
            });
        cy.get('body')
            .then($body => {
                if ($body.find('[aria-label="Manage cookie preferences"]').length) {
                    cy.get(ps.common.login.acceptCookies).click();
                } 
            })
            .then(selector => {
                cy.get(selector).click();
            });
        cy.get(ps.common.login.emailInput).click().type(credentials.email, { force: true }).should('have.value', credentials.email);
        cy.get(ps.common.login.submitBttn).click();
        if (credentials.email.includes('invalid')) {
            cy.get(ps.common.login.userAlert).should('be.visible');
            cy.get(ps.common.login.userAlert).invoke('text').should('contain', 'Make sure the email address you entered is correct.');
            cy.end();
            } else {
                cy.get(ps.common.login.passwordInput).click().type(credentials.password, { force: true }).should('have.value', credentials.password);
                cy.get(ps.common.login.submitBttn).click();
                if (credentials.password.includes('wrong')) {
                    cy.get(ps.common.login.passAlert).should('be.visible');
                    cy.get(ps.common.login.userAlert).invoke('text').should('contain', 'Oops! Your password seems to be incorrect. Please try again or use a verification link');
                    cy.end();
                }
                else {
                    //captcha 
                    //  cy.get(ps.common.login.captcha).should('be.visible').trigger('mousedown', { button: 0, waitForAnimations: true });
                    //  cy.wait(5000);
                    //  cy.get(ps.common.login.captcha).should('be.visible').trigger('mouseup');

                    //  cy.get(ps.common.login.headerMenu).should('exist');
                }
            }
    }); 
});


Then(/^I select the hotel in '(.*)' and dates$/, (city) => {
    const checkInDate = Cypress.dayjs().add(7, 'days').format('YYYY-MM-DD'); 
    const checkOutDate = Cypress.dayjs().add(10, 'days').format('YYYY-MM-DD');
    cy.visit(Cypress.config('baseUrl'));
    cy.get('[aria-modal="true"]', {delay: 300}).should(Cypress._.noop).then($el => {
      if ($el.length) {
        cy.wrap(ps.common.login.modalWin).should('be.visible').click();
      }
    });
    cy.get(ps.common.search.cityInput).type(city, {force: true}).should('have.value', city);
    cy.get(ps.common.search.startdate).click();
    cy.get(`[data-date="${checkInDate}"]`).click();
    cy.get(`[data-date="${checkOutDate}"]`).click();
    cy.get(ps.common.search.searchBttn).contains('Search').click();
    cy.get(ps.common.search.searchResultCity).contains(city);
    cy.get(ps.common.search.hotelLink).invoke('removeAttr', 'target').click();
    cy.get(ps.common.login.acceptCookies).click();
    cy.get(ps.common.search.reserveBttn).scrollIntoView().should('be.visible');
    cy.get('body').then($body => {
            if ($body.find(ps.common.search.selectChalet).length) {
                cy.get(ps.common.search.selectChalet).select('1').should('have.value', '1');
            }
    });
    cy.get(ps.common.search.reserveBttn).click();
    cy.get(ps.common.search.reservationStep2).invoke('text').contains('Enter your details');
});
