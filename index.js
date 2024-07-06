// code your solution here
/**
 * Returns the year the Denver Broncos won the Superbowl.
 *
 * @param {Array} record - An array of objects containing year and result properties.
 * @return {string|undefined} - The year when the Broncos won the Superbowl or undefined if no win is found.
 */
function superbowlWin(record) {
    for (let entry of record) {
        if (entry.result === "W") {
            return entry.year;
        }
    }
    return undefined;
}


