import { ProductEditions } from './../../components/ProductEditions';
import { ProductPage } from './../../pages/ProductPage.po';
import { LoginPage } from './../../pages/LoginPage.po';
import { AgeWarningModal } from '../../components/modals/AgeWarning';
import { SearchBar } from '../../components/SearchBar';
import {browser} from 'protractor';
import { StorePage } from '../../pages/StorePage.po';
import { AuthTypes } from '../../data/AuthTypes.data';

const storePage: StorePage = new StorePage();

describe('UI E2E Automation tests for store page', () => {

    beforeEach(() => {
        storePage.open();
    });

    it('Add game in favourite list via search tooltip for don\'t auth user', () => {
        const data: string = 'Red';

        new SearchBar().searchResultTooltipShouldNotBeVisible()
            .typeSearchRequest(data)
            .valueInSearchFieldShouldBeSameAs(data)
            .searchResultTooltipShouldBeVisible()
            .searchResultTooltipItemsShouldBeVisible(4)
            .clickCrossButton()
            .searchResultTooltipShouldNotBeVisible()
            .valueInSearchFieldShouldBeSameAs('')
            .typeSearchRequest(data)
            .valueInSearchFieldShouldBeSameAs(data)
            .searchResultTooltipShouldBeVisible()
            .searchResultTooltipItemsShouldBeVisible(4)
            .clickSearchItemByTitle('Red Dead Redemption 2')
            .pageShouldBeOpened();

        const agewarningModal = new AgeWarningModal().modalShouldBePresent();
        agewarningModal.clickContinueButton();
        agewarningModal.modalShouldNotBePresent();

        new ProductEditions().clickRandomFavouriteButton(1)
            .pageShouldBeOpened()
            .authTypeShouldBePresent(AuthTypes.Apple);
    })
})