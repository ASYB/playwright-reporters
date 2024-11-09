// Filename: playwright.junit.config.js


const config = {
    reporter: [['junit', {
        outputFile: 'test-results.xml',
    }]],
};


module.exports = config;