/**
 * @param {*} possibleValues
 * @param {*} values
 * @returns - first matching value in both arrays
 *
 * @example
 * getFirstMatchingValue([0, 1, 2, 3], [2, 3]); -> 2
 * getFirstMatchingValue([0, 1, 2, 3], [3, 2]); -> 3
 * getFirstMatchingValue([0, 1, 2, 3], [1, 2, 3]); -> 1
 */
const getFirstMatchingValue = (possibleValues, values) => {
    return values.find(e => possibleValues.indexOf(e) !== -1);
}

export default getFirstMatchingValue;
