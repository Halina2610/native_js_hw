import {CityType} from '../object/object.02';
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from './05';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street',
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street',
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 1,
                    street: {
                        title: 'Central Str',
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 2,
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})


// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test.skip('list of streets titles of government buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test.skip('list of streets titles', () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe('White street');
    expect(streetsNames[1]).toBe('Happy street');
    expect(streetsNames[2]).toBe('Happy street');
})

test('create greeting messages for streets', () => {
    let messagesForstreets = createMessages(city.houses);

    expect(messagesForstreets.length).toBe(3);
    expect(messagesForstreets[0]).toBe('Hello guys from White street')
    expect(messagesForstreets[1]).toBe('Hello guys from Happy street')
    expect(messagesForstreets[2]).toBe('Hello guys from Happy street')


})
