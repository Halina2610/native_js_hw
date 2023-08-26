import {student, StudentType} from '../object/object.02';

export const addSkill = (student: StudentType, skill: string ) => {
student.technologies.push({
    id: new Date().getTime(), //вернет новое число сгененированное
    title: skill,
})
}

