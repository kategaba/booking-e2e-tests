export default {
    login: {
        signInBttn: '[data-testid="header-sign-in-button"] span',
        emailInput: 'input[type="email"]',
        submitBttn: '[type="submit"]',
        passwordInput: 'input[type="password"]',
        captcha: '#px-captcha',
        modalWin: '[aria-label="Dismiss sign-in info."]',
        acceptCookies: 'button[id="onetrust-accept-btn-handler"]',
        headerMenu: '[data-testid="header-profile"]',
        userAlert: '#username-note',
        passAlert: '#password-note',
    },
    search: {
        cityInput: 'input[name="ss"]',
        startdate: '[data-testid="date-display-field-start"]',
        searchBttn: 'button[type="submit"]',
        searchResultCity: 'h1[aria-live="assertive"]',
        hotelLink: '[data-testid="title"]:eq(0)',
        selectChalet: '.hprt-block [data-testid="select-room-trigger"]:eq(0)',
        reserveBttn: '[data-title="Select your accommodation first"]',
        changeselection: '[data-ga4-track="change_selection"]',
        reservationStep2: '.bui-card__content header h2:eq(0)',
    }
}