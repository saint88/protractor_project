import { Config, browser } from 'protractor';
import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

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

  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: StacktraceOption.PRETTY } }));
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