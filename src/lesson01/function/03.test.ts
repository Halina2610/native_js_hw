import {StudentType} from '../object/object.02';
import {addSkill, cityLives, makeStudentActive} from './function.03';

let student: StudentType;

beforeEach(() => {
    student = {
        name: 'Galina',
        age: 30,
        isActive: true,
        address: {
            'live in': {
                city: 'Ushachi',
                street: 'Vitebskaya',
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

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(4);
    addSkill(student, 'TS');

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe('TS');
    expect(student.technologies[3].title).toBeDefined();// определен id.
});
test('student to be is active', () => {

    makeStudentActive(student);
    expect(student.isActive).toBe(false)

});

test('does student live in city', () => {
    let result = cityLives(student, 'Minsk');
    let result2 = cityLives(student, 'Moscow')

    expect(result).toBe(false)
    expect(result2).toBe(false)
})