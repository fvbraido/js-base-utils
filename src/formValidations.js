export const regexCellphone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

export const regexTwoWords = /(\w.+\s).+/;

export const isCpf = (value) => {
    if (value.length > 3) {
        return true
    } else {
        return false
    }
}
