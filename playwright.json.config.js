// Filename: playwright.json.config.js


const config = {
    reporter: [['json', {
        outputFile: 'test-results.json',
    }]],
};


module.exports = config;