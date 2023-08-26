
type LocalAddressType = {
    'live in': LiveType
    country: string
}

type LiveType = {
    city: string
    street: string
}

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: TechnologiesType[]
}

export const student: StudentType = {
    name: 'Galina',
    age: 30,
    isActive: true,
    address: {
        'live in': {
            city: 'Ushachi',
            street: "Vitebskaya",
        },
        country: 'Belarus',
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
        {
            id: 4,
            title: 'React'
        },
    ]
}

console.log(student.name)
console.log(student.age)
console.log(student.address.country)
console.log(student.technologies[2].title)


type AddressType = {
    number: number;
    street: {
        title: string;
    };
}

type HouseType = {
    buildedAt: number;
    repaired: boolean;
    address: AddressType;
}

type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION";
    budget: number;
    staffCount: number;
    address: AddressType;
}

export type CityType = {
    title: string;
    houses: HouseType[];
    governmentBuildings: GovernmentBuildingType[];
    citizensNumber: number;
};