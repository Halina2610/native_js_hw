import {divides, mult, splitIntoWords, subtract, sum} from './HelloTests01';


// Тестирование сложения двух положительных чисел
test('adds two positive numbers correctly', () => {
    const result = sum(2, 3);
    expect(result).toBe(5); // Ожидаем, что результат будет равен 5
});

// Тестирование сложения положительного и отрицательного числа
test('adds a positive and a negative number correctly', () => {
    const result = sum(-4, 5);
    expect(result).toBe(1); // Ожидаем, что результат будет равен 1
});

// Тестирование сложения отрицательного и положительного числа
test('adds a negative and a positive number correctly', () => {
    const result = sum(-3, 8);
    expect(result).toBe(5); // Ожидаем, что результат будет равен 5
});

// Тестирование сложения двух отрицательных чисел
test('adds two negative numbers correctly', () => {
    const result = sum(-5, -7);
    expect(result).toBe(-12); // Ожидаем, что результат будет равен -12
});

// Тестирование сложения с нулем
test('adds a number and zero correctly', () => {
    const result = sum(10, 0);
    expect(result).toBe(10); // Ожидаем, что результат будет равен 10
});

// Тестирование вычитания двух положительных чисел
test('subtracts two positive numbers correctly', () => {
    const result = subtract(10, 5);
    expect(result).toBe(5); // Ожидаем, что результат будет равен 5
});

// Тестирование вычитания отрицательного числа из положительного числа
test('subtracts a negative number from a positive number correctly', () => {
    const result = subtract(10, -3);
    expect(result).toBe(13); // Ожидаем, что результат будет равен 13
});

// Тестирование вычитания положительного числа из отрицательного числа
test('subtracts a positive number from a negative number correctly', () => {
    const result = subtract(-5, 2);
    expect(result).toBe(-7); // Ожидаем, что результат будет равен -7
});

// Тестирование вычитания двух отрицательных чисел
test('subtracts two negative numbers correctly', () => {
    const result = subtract(-10, -3);
    expect(result).toBe(-7); // Ожидаем, что результат будет равен -7
});

// Тестирование вычитания нуля
test('subtracts zero from a number correctly', () => {
    const result = subtract(10, 0);
    expect(result).toBe(10); // Ожидаем, что результат будет равен 10
});
test('multiply should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = mult(a, b); //action/ может быть несколько проверок, но лучше все дробить на небольшие тесты
    const result2 = mult(b, c)


    expect(result1).toBe(2) //ожидание
    expect(result2).toBe(6) //ожидание
})

test('multiplies two positive numbers correctly', () => {
    const result = mult(2, 3);
    expect(result).toBe(6); // Ожидаем, что результат будет равен 6
});

// Тестирование умножения положительного и отрицательного числа
test('multiplies a positive and a negative number correctly', () => {
    const result = mult(-4, 5);
    expect(result).toBe(-20); // Ожидаем, что результат будет равен -20
});

// Тестирование умножения на ноль
test('multiplies a number by zero correctly', () => {
    const result = mult(10, 0);
    expect(result).toBe(0); // Ожидаем, что результат будет равен 0
})

test('divides two positive numbers correctly', () => {
    const result = divides(10, 2);
    expect(result).toBe(5); // Ожидаем, что результат будет равен 5
});

// Тестирование деления отрицательного числа на положительное число
test('divides a negative number by a positive number correctly', () => {
    const result = divides(-20, 4);
    expect(result).toBe(-5); // Ожидаем, что результат будет равен -5
});

// Тестирование деления на ноль
/*test('divides a number by zero', () => {
    expect(() => divides(10, 0)).toThrow(); // Ожидаем, что вызов функции приведет к ошибке
});*/
test('divides a number by zero', () => {
    expect(divides(10, 0)).toBe(Infinity);
});

// Тестирование строк

test('splitting into words should be correct', () => {
    const sent1 = 'Hello my friend!';
    const sent2 = 'JS - the  best programming language.';

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);

    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');
});