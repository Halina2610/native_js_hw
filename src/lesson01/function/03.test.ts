import {StudentType} from '../object/object.02';
import {addSkill} from './function.03';

let student: StudentType;

beforeEach(()=>{
    student = {
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
})

test("new tech skill should be added to student", ()=> {

    addSkill()


})