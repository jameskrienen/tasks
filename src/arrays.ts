/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((price: number): number => price * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts2 = amounts.map((val: string): string =>
        val.charAt(0) === "$" ? (val = val.slice(1, val.length)) : val
    );
    return amounts2.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noqs = messages.filter(
        (mess: string): boolean => !(mess.charAt(mess.length - 1) === "?")
    );
    return noqs.map((upper: string): string =>
        upper.charAt(upper.length - 1) === "!" ? upper.toUpperCase() : upper
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const ltfour = words.filter((word: string): boolean => word.length < 4);

    return ltfour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum: number = addends.reduce(
        (total: number, cur: number) => total + cur,
        0
    );

    return sum + "=" + addends.join("+"); //why can i do this. im concatenating a number to a string
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const copy = [...values];

    const neg = values.findIndex((val: number): boolean => val < 0);

    if (neg === -1) {
        const endVal = values.reduce(
            (currTot: number, num: number) => currTot + num,
            0
        );
        copy.splice(values.length, 0, endVal);
        return copy;
    } else if (neg === 0) {
        copy.splice(neg + 1, 0, 0);
        return copy;
    } else {
        const negVal = values.reduceRight(
            (curr: number, currVal: number) => curr + currVal,
            values[neg]
        );
        copy.splice(neg + 1, 0, negVal);
        return copy;
    }
}
