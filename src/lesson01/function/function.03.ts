import {GovernmentBuildingType, HouseType, student, StudentType} from '../object/object.02';
import exp from 'constants';

const sum = (a: number, b: number) => { // чистая функция
    return a + b;
}

//ООП функция, изменяющая иную функцию
export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(), //вернет новое число сгененированное
        title: skill,
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = false;
}

export const cityLives = (s: StudentType, cityName: string) => {
    return s.address['live in'].city === 'Minsk';
}


export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}


export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (s: GovernmentBuildingType, b: number) => {
  s.staffCount -= b;
}

export const toHireStaff = (s: GovernmentBuildingType, a: number) => {
 s.staffCount += a;
}