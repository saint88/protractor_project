import { waitForElementVisible } from './../utils/waiter';
import { AuthTypes } from './../data/AuthTypes.data';
import { $ } from 'protractor';
import { BasePage } from "./BasePage.po";

export class LoginPage extends BasePage<LoginPage> {

    private pattern = new RegExp(this.hostnamePattern + '/id/login\\?.*?');

    pageShouldBeOpened(): LoginPage {
        super.pageShouldBeOpened(this.pattern);

        return this;
    }

    authTypeShouldBePresent(type: AuthTypes): LoginPage {
        expect(waitForElementVisible($(`#login-with-${type.toString()}`))).toBeTrue;

        return this;
    }
}