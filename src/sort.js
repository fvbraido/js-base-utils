// sort by two keys, e.g, by name and within by salary
export function sortGroupByKeys(a, b, firstKey, secondKey, direction) {
    if (direction !== "desc") {
        direction = "asc"
    };
    var result = 1;
    if (a[`${firstKey}`] < b[`${firstKey}`]) {
        direction === "desc" ? result = 1 : result = -1;
    } else if (a[`${firstKey}`] > b[`${firstKey}`]) {
        direction === "desc" ? result = -1 : result = 1;
    } else {
        if (a[`${secondKey}`] < b[`${secondKey}`]) {
            result = -1;
        } else if (a[`${secondKey}`] > b[`${secondKey}`]) {
            result = 1;
        } else {
            result = 0;
        }
    }
    return result;
}

// simple sort by key, choose ASC od DESC
export function sortByKey(a, b, firstKey, direction) {
    if (direction !== "desc") {
        direction = "asc"
    };
    var result = 1;
    if (a[`${firstKey}`] < b[`${firstKey}`]) {
        direction === "desc" ? result = 1 : result = -1;
    } else {
        direction === "desc" ? result = -1 : result = 1;
    }
    return result;
}

export function sortBy(a, b, firstKey, secondKey, direction, sort = false, twoKeys = false) {
    if (sort && twoKeys) {
        return sortGroupByKeys(a, b, firstKey, secondKey, direction)
    } else if (sort && firstKey) {
        return sortByKey(a, b, firstKey, direction)
    } else {
        return 0
    }
}