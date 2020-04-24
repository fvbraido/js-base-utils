// Map a Object to an Array
export function mapFormError(errorsObject) {
    if (errorsObject) {
        var errorArray = Object.entries(errorsObject).map(([key, value]) => (`${key}: ${value}`));
        return errorArray;
    } else {
        return "";
    }
}

// remove element of an array by value
export function removeElementArrayByValue(arr, valueToRemove) {
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === valueToRemove) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return (arr);
}

// If array contains value, remove it; else, add it
export function toggleValueArray(array, value) {
    let newArray = [];
    if (array) {
        if (!Array.isArray(array)) {
            array = [array]
        }
    } else {
        array = []
    }
    if (array.includes(value)) {
        newArray = array.filter(item => item !== value);
    } else {
        newArray = [...array, value]
    }
    return (newArray);
}

// Given &BEDROOM= (key) and [0,1] (array), return "&BEDROOM=0&BEDROOM=1"
export function stringfyArrayWithKey(key, arr) {
    var string = "";
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            string = string + `${key}${arr[i]}`
        }
    }
    return string;
}

// Given {key_1: [el_1_1, el_1_2], key_2: [el_2]} (obj), return "key_1el_1_1key_1el_1_2key_2el_2"
export function mapObjectKeysWithStringfyArrayWithKey(obj) {
    var string = "";
    Object.entries(obj).map(([key, el]) =>
        string += stringfyArrayWithKey(key, el)
    );
    return string;
}

// Given [ {key: value_1_a}, {key: value_2_a}, ...] (arr of objects), key => return [value_1_a, value_2_a] 
export function extractKeyValueFromArrayOfObjects(arrOfObjects, key) {
    var resultingArr = [];
    if (arrOfObjects && key) {
        if (arrOfObjects.length > 0 && String(key) !== "") {
            for (var i = 0; i < arrOfObjects.length; i++) {
                resultingArr.push(arrOfObjects[i][key]);
            }
        }
    }
    return (resultingArr);
}

// Given {keyA: valueA}, oldKey, newKey => return {newKey: valueA}
export function swapObjectKeyName(obj, oldKey, newKey) {
    var newObject = {};
    delete Object.assign(newObject, obj, { [newKey]: obj[oldKey] })[oldKey];
    return newObject;
}

// Given [el1, el2, el3, ] (arr), key => return [{key: el1}, {key: el2}, {key: el3}]
// objectFromArray was same
export function mapArrElToArrObj(arr, key) {
    var resultingArr = [];
    var obj = {};
    if (arr && key) {
        if (arr.length > 0 && String(key) !== "") {
            for (var i = 0; i < arr.length; i++) {
                obj = {};
                obj[`${String(key)}`] = arr[i]
                resultingArr.push(obj);
            }
        }
    }
    return (resultingArr);
}

// Set input state related to local model and attribute
export function inputAttributeModel(inputModel, inputName, inputValue, inputsState) {
    if (inputsState[inputModel] === undefined) {
        inputsState[inputModel] = {};
    }
    inputsState[inputModel][inputName] = inputValue
    return (inputsState);
}

//
export function avoidNull(obj, returnAs) {
    if (obj) {
        return obj;
    } else {
        if (returnAs === "array") {
            return []
        } else if (returnAs === "number") {
            return 0
        } else if (returnAs === "string") {
            return ""
        } else if (returnAs === "bool") {
            return false
        } else {
            return {}
        }
    }
}

// 
export function forceArray(el) {
    if (el) {
        if (!Array.isArray(el)) {
            el = [el]
        }
    } else {
        el = []
    }
    return el
}

// Create object using model and data extractor
export function objFromModelAndExtractor(element, dataExtracor) {
    var result = {};
    if (element && dataExtracor) {
        for (var i = 0; i < dataExtracor.length; i++) {
            if (dataExtracor[i].value) {
                result[dataExtracor[i].name] = element[dataExtracor[i].value];
            } else {
                result[dataExtracor[i].name] = dataExtracor[i].string;
            }
        }
    }
    return result
}
