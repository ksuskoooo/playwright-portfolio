import {test, expect } from '../utils/fixtures/base-test';
import { faker } from '@faker-js/faker';    

const validationData = [
    {
        testName: 'should show error when FirstName is empty',
        firstName: '',
        lastName: faker.person.lastName(),
        postalCode: faker.location.zipCode('####'), 
        expectedError: 'Error: First Name is required',
    }, 
    {
        testName: 'should show error when LastName is empty',
        firstName: faker.person.firstName(), 
        lastName: '', 
        postalCode: faker.location.zipCode('####'), 
        expectedError: 'Error: Last Name is required'
    },
    {
        testName: 'should show error when PostalCode is empty',
        firstName: faker.person.firstName(), 
        lastName: faker.person.lastName(), 
        postalCode: '', 
        expectedError: 'Error: Postal Code is required' 
    }
];

for (const data of validationData) {

    test(data.testName, async ({

    loginPage,
    inventoryPage,
    cartPage, 
    checkoutStepOnePage, 

    }) => 
{
    
                await loginPage.goto();
                await loginPage.login('standard_user', 'secret_sauce');
        
            
                await inventoryPage.addJacketToCart();
                await inventoryPage.cartBadge.click();
        
           
                await cartPage.checkoutButton.click();
    
                await checkoutStepOnePage.fillCheckoutForm(data.firstName, data.lastName, data.postalCode);
                await checkoutStepOnePage.continueButton.click();
        
                await expect(checkoutStepOnePage.errorMessage).toHaveText(data.expectedError);
            });
        }

