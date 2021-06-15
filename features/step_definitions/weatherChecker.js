const {Given, When, Then} = require('cucumber');
const page = require('../support/pages/weatherCheckerPage');


Given('User open Weather Checker application', async function() {
    await testController.navigateTo(page.weatherChecker.url());
});

When('User search valid existing postcode', async function() {
         page.weatherChecker.searchPostcode('W6 0NW');
});

When('User search valid non-existing postcode', async function() {
        page.weatherChecker.searchPostcode('W9  9NW');
});

When('User search invalid postcode', async function() {
        page.weatherChecker.searchPostcode('9NW');
});

Then('Weather details should be presented to the user', async function() {
        await testController.expect(page.weatherChecker.weatherDetailsTable().visible).ok()
});

Then('Weather details should display Time in correct format', async function() {

});

Then('Weather details should display Temperature and Humidity', async function() {

});

Then('Weather details should not display properties without value', async function() {

});

Then('App should inform the user that it is unanble find the postcode', async function() {
            await testController.expect(page.weatherChecker.errorMessage().innerText).contains('Unable to find the postcode.')
});

Then('App should inform the user that postcode is invalid', async function() {
            await testController.expect(page.weatherChecker.errorMessage().innerText).contains('Invalid postcode.')
});

