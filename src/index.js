module.exports = function toReadable(number) {
    const numToString = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let strNumber = String(number);
    let result = "";

    function minus21(num) {
        return numToString[num];
    }

    function minus100(num) {
        if (num[1] == 0) {
            return numToString[num];
        }
        if (num < 21) {
            return minus21(num);
        }
        return `${numToString[num[0] + 0]} ${minus21(num[1])}`;
    }

    function hundred(num) {
        if (num[1] == 0 && num[2] == 0) {
            return `${minus21(num[0])} hundred`;
        }
        return num[1] == 0
            ? `${minus21(num[0])} hundred ${minus21(num[2])}`
            : `${minus21(num[0])} hundred ${minus100(num[1] + num[2])}`;
    }

    if (strNumber < 21) {
        result = minus21(strNumber);
    } else if (strNumber < 100) {
        result = minus100(strNumber);
    } else {
        result = hundred(strNumber);
    }
    return result;
};

// console.log(toReadable(507));
