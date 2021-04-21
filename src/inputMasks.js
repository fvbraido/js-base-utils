import { isCNPJ, isCPF } from 'brazilian-values';

export function inputMask(text, maskType = null) {
    if (text === null) {
        text = ""
    }
    var maskedText = text;
    var ifCpf;
    if (['password', 'submit', 'email', 'textarea', 'number', 'date', 'datetime', 'time', 'url'].includes(maskType)) {
        return text
    } else if (maskType === "cpfcnpj") {
        // cpf
        if (text.match(/\d/g)) {
            ifCpf = (text.match(/\d/g).length <= 11)
        } else {
            ifCpf = false
        }
        if (ifCpf) {
            maskedText = maskedText.replace(/\D/g, "");
            maskedText = maskedText.replace(/(\d{3})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/(\d{3})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            return maskedText.substring(0, 14);
        } else {
            maskedText = maskedText.replace(/\D/g, "");
            maskedText = maskedText.replace(/^(\d{2})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            maskedText = maskedText.replace(/\.(\d{3})(\d)/, ".$1/$2");
            maskedText = maskedText.replace(/(\d{4})(\d)/, "$1-$2");
            return maskedText.substring(0, 18);
        }
    } else if (maskType === "cpf") {
        // cpf
        if (text.match(/\d/g)) {
            ifCpf = (text.match(/\d/g).length <= 11)
        } else {
            ifCpf = false
        }
        if (ifCpf) {
            maskedText = maskedText.replace(/\D/g, "");
            maskedText = maskedText.replace(/(\d{3})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/(\d{3})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            return maskedText.substring(0, 14);
        } else {
            return maskedText.substring(0, 14);
        }
    } else if (maskType === "cnpj") {
        // cnpj
        maskedText = maskedText.replace(/\D/g, "");
        maskedText = maskedText.replace(/^(\d{2})(\d)/, "$1.$2");
        maskedText = maskedText.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        maskedText = maskedText.replace(/\.(\d{3})(\d)/, ".$1/$2");
        maskedText = maskedText.replace(/(\d{4})(\d)/, "$1-$2");
        return maskedText.substring(0, 18);
    } else if (maskType === "cep") {
        if (maskedText.length <= 10) {
            maskedText = maskedText.replace(/\D/g, "")
            maskedText = maskedText.replace(/^(\d{2})(\d)/, "$1.$2")
            maskedText = maskedText.replace(/\.(\d{3})(\d)/, ".$1-$2")
        }
        return maskedText.substring(0, 10);
    } else if (maskType === "token") {
        if (maskedText.length <= 6) {
            maskedText = maskedText.replace(/\D/g, "")
        }
        return maskedText.substring(0, 6);
    } else if (maskType === "brl_localphone") {
        if (maskedText.length <= 14) {
            maskedText = maskedText.replace(/\D/g, "")
            maskedText = maskedText.replace(/^(\d)/, "($1")
            maskedText = maskedText.replace(/(.{3})(\d)/, "$1) $2")
            if (maskedText.length === 10) {
                maskedText = maskedText.replace(/(.{1})$/, "-$1")
            } else if (maskedText.length === 11) {
                maskedText = maskedText.replace(/(.{2})$/, "-$1")
            } else if (maskedText.length === 12) {
                maskedText = maskedText.replace(/(.{3})$/, "-$1")
            } else if (maskedText.length === 13) {
                maskedText = maskedText.replace(/(.{4})$/, "-$1")
            }
        }
        return maskedText.substring(0, 14);
    } else if (maskType === "brl_cellphone") {
        if (maskedText.length <= 15) {
            maskedText = maskedText.replace(/\D/g, "")
            maskedText = maskedText.replace(/^(\d)/, "($1")
            maskedText = maskedText.replace(/(.{3})(\d)/, "$1) $2")
            if (maskedText.length === 10) {
                maskedText = maskedText.replace(/(.{1})$/, "-$1")
            } else if (maskedText.length === 11) {
                maskedText = maskedText.replace(/(.{2})$/, "-$1")
            } else if (maskedText.length === 12) {
                maskedText = maskedText.replace(/(.{3})$/, "-$1")
            } else if (maskedText.length === 13) {
                maskedText = maskedText.replace(/(.{4})$/, "-$1")
            } else if (maskedText.length > 13) {
                maskedText = maskedText.replace(/(.{4})$/, "-$1")
            }
        }
        return maskedText.substring(0, 15);
    } else if (maskType === "brl") {
        maskedText = String(maskedText);
        text = String(text);
        if (maskedText && maskedText.length === 1) {
            maskedText = `0,0${maskedText}`
        }
        if (maskedText && maskedText.split(".")[1] && maskedText.split(".")[1].length === 1) {
            maskedText = `${maskedText}0`
        }
        maskedText = parseInt(maskedText.replace(/[\D]+/g, ''));
        maskedText = maskedText + '';
        maskedText = maskedText.replace(/([0-9]{2})$/g, ",$1");
        if (maskedText && maskedText.length === 1) {
            maskedText = `0,0${maskedText}`
        }
        if (maskedText.length > 6) {
            maskedText = maskedText.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
        if (text[0] === "-" || text.includes("-")) {
            return "-" + maskedText;
        }
        if (maskedText === "NaN") {
            return "0"
        } else {
            return maskedText
        }
    } else if (["datetime-local", "datetime"].includes(maskType)) {
        if (maskedText.toString().length >= 19) {
            return (maskedText.toString().slice(0, 19));
        } else if (maskedText.toString().length < 19 && maskedText.toString().length >= 10) {
            return (maskedText.toString().slice(0, 16));
        }
    } else {
        return maskedText
    }
}


export function inputMinLength(value, n) {
    var bool = false;
    if (value && n) {
        if (value.length >= n) {
            bool = true;
        }
    }
    return bool
}

export function parseToNumber(value) {
    return Number(value.replace(/\./g, '').replace(',', '.'))
}

export function validator(text, type) {
    if (["email"].includes(type)) {
        var regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(text);
    } else if (["cpfcnpj"].includes(type)) {
        var ifCpf;
        if (text.match(/\d/g)) {
            ifCpf = (text.match(/\d/g).length <= 11)
        } else {
            ifCpf = false
        }
        if (ifCpf) {
            return isCPF(text)
        } else {
            return isCNPJ(text)
        }
    } else {
        return true
    }
}

export function compareAppearIf(appearIf, currentForm) {
    var result = true;
    if (appearIf) {
        result = false;
        if (appearIf.type === "equal") {
            if ([currentForm[appearIf.key], `${currentForm[appearIf.parent] ? currentForm[appearIf.parent][appearIf.key] : currentForm[appearIf.key]}`].includes(appearIf.value)) {
                result = true;
            }
        } else if (appearIf.type === "includes") {
            if (appearIf.value.includes(`${currentForm[appearIf.parent] ? currentForm[appearIf.parent][appearIf.key] : currentForm[appearIf.key]}`)) {
                result = true;
            }
        } else if (appearIf.type === "not_null") {
            if (currentForm[appearIf.key]) {
                result = true;
            }
            if (currentForm[appearIf.parent] && currentForm[appearIf.parent][appearIf.key]) {
                result = true;
            }
        }
    } else {
        result = true;
    }
    return result;
}


export function typeResolver(type) {
    if (['brl', 'text', 'cpfcnpj', 'cpf', 'currency', 'phone', 'cep'].includes(type)) {
        return 'text'
    } else if (['password', 'submit', 'email', 'textarea', 'number', 'date', 'datetime', 'datetime-local', 'time', 'url', 'hidden'].includes(type)) {
        return type
    } else {
        return 'text'
    }
}