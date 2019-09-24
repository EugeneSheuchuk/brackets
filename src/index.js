module.exports = function check(str, bracketsConfig) {
    const config = {};
    // create config object where key = open bracket and value = closing bracket
    bracketsConfig.map(item => {
        config[item[0]] = item[1];
    });
    const helper = str => {
        if (str.length === 0) {
            return true;
        }
        if ((str.length + 1) % 2 === 0) {
            return false;
        }
        // create subfunctions which check bracket is opening or closing
        const isOpenBrackets = char => Object.keys(config).includes(char);
        const getClosingBracket = char => config[char];

        for (let i = 0; i < str.length; i++) {
            if (isOpenBrackets(str[i]) && getClosingBracket(str[i]) === str[i + 1]) {
                // delete from str correct pair of brackets
                let newString = `${str.slice(0, i)}${str.slice(i + 2)}`;
                return helper(newString);
            }
        }
        return false;
    };
    return helper(str);
};
