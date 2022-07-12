export const cellphoneMask = (value) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
    if (value.length < 14) value = value.replace(/(\d{4})(\d)/, "$1-$2");
    else value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
}

export const cpfMask = (value) => {
    if (String(value).length < 14) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return value.substring(0, 14);
    } else { return value.substring(0, 13) + value.substring(13, 14).replace(/\D/g, "") }
}

export const cpfCnpjMask = (value) => {
    if (String(value).length < 18) {
        var ifCpf = ((value.match(/\d/g).length || 0) <= 11)
        if (ifCpf) {
            value = value.replace(/\D/g, "");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            return value.substring(0, 14);
        } else {
            value = value.replace(/\D/g, "");
            value = value.replace(/^(\d{2})(\d)/, "$1.$2");
            value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
            value = value.replace(/(\d{4})(\d)/, "$1-$2");
            return value.substring(0, 18);
        }
    } else { return value.substring(0, 17) + value.substring(17, 18).replace(/\D/g, "") }
}