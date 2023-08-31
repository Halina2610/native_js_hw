const ages = [18,20,22,1,100,90,14];

export const predicate =(age: number)=> {
    return age > 90;
}
const oldAges = [100];

export type CourseType = {
    title: string
    price: number
};

const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150},
]

const chipPredicate = (course: CourseType) => {
    return course.price < 160;
};

const chipCourses = [
    {title: 'css', price: 110},
    {title: 'css', price: 150},
]