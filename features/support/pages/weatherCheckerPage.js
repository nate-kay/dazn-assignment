const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.weatherChecker = {
    url: function() {
        return 'https://serene-mountain-14043.herokuapp.com';
    },
    postcodeText: function() {
        return select('#searchLocation>input');
    },
    searchButton: function() {
        return select('#searchLocation>button');
    },
    weatherDetailsTable: function() {
        return select('table>caption.tableHeader');
    },
    errorMessage: function() {
            return select('#root h1');
    },

    searchPostcode: async function(postcode) {
            await testController
                    .typeText(this.postcodeText(), postcode)
                    .click(this.searchButton())
    }




};
