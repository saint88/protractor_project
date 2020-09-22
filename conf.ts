import { Config, browser } from 'protractor';
import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

const log4js = require('log4js');

export let config: Config = {
  allScriptsTimeout: 15000,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000,
    print: function() {}
  },

  noGlobals: true,

  beforeLaunch: () => {
    log4js.configure({
      levels: {
        STEP: { value: 600, colour: 'green' }
      },
      appenders: {
        console: { type: 'console' }
      },
      categories: {
        default: { appenders: ['console'], level: 'STEP' }
      }
    });
},

  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: StacktraceOption.PRETTY } }));
    browser.logger = log4js.getLogger();
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().setSize(1500, 1300);
  },

  onComplete: () => {
    browser.quit();
  },

  params: {
    baseUrl: 'https://www.epicgames.com'
  },
  specs: [ 'specs/**/*spec.js' ],

  seleniumAddress: 'http://localhost:4444/wd/hub'
};