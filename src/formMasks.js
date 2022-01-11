export const cellphoneMask = (value) => {
    value = value.replace(/\D/g,"");
    value = value.replace(/^(\d\d)(\d)/g,"($1) $2");
    if(value.length < 14) value = value.replace(/(\d{4})(\d)/,"$1-$2");
    else value = value.replace(/(\d{5})(\d)/,"$1-$2");
    return value;
}

export const cpfMask = (value) => {
    if (String(value).length < 14) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value.substring(0, 14);
    } else {return value.substring(0, 13) + value.substring(13, 14).replace(/\D/g, "")}
}