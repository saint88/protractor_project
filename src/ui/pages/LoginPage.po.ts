import { waitForElementVisible } from '../utils/waiter';
import { AuthTypes } from '../data/AuthTypes.data';
import { $, browser } from 'protractor';
import { BasePage } from "./BasePage.po";
import { logger } from '../../utils/logger/log4js.logger';

export class LoginPage extends BasePage<LoginPage> {

    private pattern = new RegExp(this.hostnamePattern + '/id/login\\?.*?');

    pageShouldBeOpened(): LoginPage {
        logger.info('Check opened login page')

        super.pageShouldBeOpened(this.pattern);

        return this;
    }

    authTypeShouldBePresent(type: AuthTypes): LoginPage {
        logger.info(`Validate visible auth type ${type.toString()}`)

        expect(waitForElementVisible($(`#login-with-${type.toString()}`))).toBeTrue;

        return this;
    }
}