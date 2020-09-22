import { waitForElementVisible } from './../utils/waiter';
import { AuthTypes } from './../data/AuthTypes.data';
import { $, browser } from 'protractor';
import { BasePage } from "./BasePage.po";

export class LoginPage extends BasePage<LoginPage> {

    private pattern = new RegExp(this.hostnamePattern + '/id/login\\?.*?');

    pageShouldBeOpened(): LoginPage {
        browser.logger.step('Check opened login page')

        super.pageShouldBeOpened(this.pattern);

        return this;
    }

    authTypeShouldBePresent(type: AuthTypes): LoginPage {
        browser.logger.step(`Validate visible auth type ${type.toString()}`)

        expect(waitForElementVisible($(`#login-with-${type.toString()}`))).toBeTrue;

        return this;
    }
}