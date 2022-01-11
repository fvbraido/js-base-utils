export { 
    no_selfie,
    no_image,
    pdf,
    doc,
    video,
    excel,
    file,
    favicon,
} from "./assets"

export {
    doc_format,
    pdf_format,
    excel_format,
    video_format,
    image_format,
    audio_format,
} from "./formats"

export { 
    getBrowserLocation,
    returnBrowserLocation,
} from "./browserLocation"

export { 
    replaceNegativos,
    signBasedOnTotal,
    decimalToCurrencyBrazilian,
    currencyToDecimal,
} from "./currency"

export { 
    currentTime,
    day,
    year,
    hour,
    milisec,
    minutes,
    month,
    sec,
    time,
    monthNumberToPtBr,
    addLeftZero,
    getDaysInMonth,
    getDayOfCurrentWeek,
    getMondayOfCurrentWeek,
    getFridayOfCurrentWeek,
    getSundayOfCurrentWeek,
    addWeekToDate,
    addMonthsToDate,
    convertGMTtoUTCdateTime,
    dateStringConverter,
    dateStrf,
    dateStrfBr,
    dateStrfDayMonthBr,
    datetimeStrfBr,
    current_date_br,
    current_month_year_br,
    current_time_br,
    current_date_written_br,
    current_date,
    beginning_of_month,
    end_of_month,
    strHour,
    strDate,
    getCurrentIsoTimeToFormInput,
    datetimeOlderThan,
} from "./date"

export { 
    getGeolocationFromAddress,
} from "./googleMaps"

export { 
    inputMask,
    inputMinLength,
    parseToNumber,
    validator,
    compareAppearIf,
    typeResolver,
} from "./inputMasks"

// used
export { 
    paginate,
} from "./paginator"

export { 
    sortGroupByKeys,
    sortByKey,
    sortBy,
} from "./sort"

export { 
    searchPaginate,
    searchInput,
    searchToggle,
    searchButton,
    arrayToUrlArray,
} from "./stringQuery"

export { 
    cleanVerboseText,
} from "./strings"

export { 
    mapFormError,
    removeElementArrayByValue,
    toggleValueArray, // used
    stringfyArrayWithKey,
    mapObjectKeysWithStringfyArrayWithKey,
    extractKeyValueFromArrayOfObjects,
    swapObjectKeyName,
    mapArrElToArrObj,
    inputAttributeModel,
    avoidNull, // used
    forceArray, // used
    objFromModelAndExtractor, // used
    fileExtension, // used
    renderFileImageOrIcon, // used
    createArrayFromRange, // used
    validateFileFormat, // used
    uniqArrayElementsBasedOnKey,
} from "./utilities"

export { 
    setRequestConfig,
    returnRequestData,
    downloadFromAxiosResponse,
    downloadFromUrl,
    stateRequestData,
} from "./httpRequests"


export {
    cellphoneMask,
    cpfMask,
} from "./formMasks"

export {
    regexCellphone,
    regexTwoWords,
    isCpf,
} from "./formValidations"