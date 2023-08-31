import {CityType, GovernmentBuildingType} from '../object/object.02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
city.houses = city.houses.filter( h => h.address.street.title !== street )
}


export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingType[], number: number) => {
return buildings.filter(b => b.staffCount > number)
}

