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
export function objFromModelAndExtractor(element, dataExtracor, element2) {
    var result = {};
    if (element && dataExtracor) {
        for (var i = 0; i < dataExtracor.length; i++) {
            if (dataExtracor[i].value) {
                result[dataExtracor[i].name] = element[dataExtracor[i].value];
            } else if (dataExtracor[i].selected) {
                result[dataExtracor[i].name] = element2[dataExtracor[i].selected];
            } else {
                result[dataExtracor[i].name] = dataExtracor[i].string;
            }
        }
    }
    return result
}

// return true if file extension in whitelist
export function validateFileFormat(file, whitelistArray = []) {
    var bool = false;
    var name = file.name || file;
    name = name.split(".").slice(-1)[0].toLowerCase()
    if (whitelistArray.includes(name)) {
        bool = true;
    }
    return (bool);
};


// return file extension
export function fileExtension(file, formats) {
    var extension = "image";
    var name = file.name || file;
    if (name) {
        if (formats.doc_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            extension = "docx";
        } else if (formats.pdf_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            extension = "pdf";
        } else if (formats.video_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            extension = "video";
        } else if (formats.audio_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            extension = "audio";
        } else if (formats.excel_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            extension = "excel";
        } else if (formats.image_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            extension = "image"
        }
    }
    return (extension);
};

// render Image or Icon
export function renderFileImageOrIcon(file, renderKey, formats, assets) {
    var url = "";
    var name = file.name;
    if (name) {
        if (formats.doc_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.doc;
        } else if (formats.pdf_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.pdf;
        } else if (formats.video_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.video;
        } else if (formats.audio_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.video;
        } else if (formats.excel_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            url = assets.excel;
        } else if (formats.image_format.includes(name.split(".").slice(-1)[0].toLowerCase())) {
            if (file.data) {
                url = URL.createObjectURL(file.data);
            } else {
                url = file[`${renderKey}`];
            }
        } else {
            url = assets.file;
        }
    }
    return (url);
};

// array from range
export function createArrayFromRange(n_min, n_max) {
    var array = [];
    while (n_min <= n_max) {
        array.push(n_min);
        n_min += 1;
    }
    return array;
}

// Retur only uniq values of array of objects based on key
export function uniqArrayElementsBasedOnKey(items, key) {
    const result = [];
    const map = new Map();
    for (const item of items) {
        if (!map.has(item[key])) {
            map.set(item[key], true);
            result.push(item);
        }
    }
    return result
}