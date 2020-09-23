import { ProductEditions } from '../../src/ui/components/ProductEditions';
import { AgeWarningModal } from '../../src/ui/components/modals/AgeWarning';
import { SearchBar } from '../../src/ui/components/SearchBar';
import { StorePage } from '../../src/ui/pages/StorePage.po';
import { AuthTypes } from '../../src/ui/data/AuthTypes.data';
import { browser } from 'protractor';
import { logger } from '../../src/utils/logger/log4js.logger';

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

        new ProductEditions().clickFavouriteButtonByIndex(1)
            .pageShouldBeOpened()
            .authTypeShouldBePresent(AuthTypes.Apple);
    })
})