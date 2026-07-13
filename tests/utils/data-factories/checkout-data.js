import { faker } from '@faker-js/faker'; 

export class CheckOutValidationData {
    static getInvalidCheckOutData () {
        return [
            {
                testName: 'FirstName is empty',
                firstName: '',
                lastName: faker.person.lastName(),
                postalCode: faker.location.zipCode('####'),
                expectedError: 'Error: First Name is required',
            },
            {
                testName: 'LastName is empty',
                firstName: faker.person.firstName(),
                lastName: '',
                postalCode: faker.location.zipCode('####'),
                expectedError: 'Error: Last Name is required'
            },
            {
                testName: 'PostalCode is empty',
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                postalCode: '',
                expectedError: 'Error: Postal Code is required'
            }
        ]
    }
}