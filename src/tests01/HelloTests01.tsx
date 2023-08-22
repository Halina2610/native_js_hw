export function sum(a: number, b: number) {
    return a + b;
}

export function subtract(a: number, b: number) {
    return a - b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function divides(a: number, b: number) {
    return a / b;
}

export function splitIntoWords(sentense: string) {
    return sentense.toLowerCase()//переводим в нихний регистр
        .split(' ') //разбиваем на массив
        .filter(w => w !== ''  && w !== '-' ) //фильтруем пустые слова (пробелы) & -

        .map(w => w
            .replace(/[!.,]/g, ''))//убираем  !
};





