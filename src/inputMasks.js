export function inputMask(text, maskType = null) {
    var maskedText = text;
    if (maskType === "cnpj") {
        if (maskedText.length <= 18) {
            maskedText = maskedText.replace(/\D/g, "");
            maskedText = maskedText.replace(/^(\d{2})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            maskedText = maskedText.replace(/\.(\d{3})(\d)/, ".$1/$2");
            maskedText = maskedText.replace(/(\d{4})(\d)/, "$1-$2");
        }
        return maskedText.substring(0, 18);
    } else if (maskType === "cpf") {
        if (maskedText.length <= 14) {
            maskedText = maskedText.replace(/\D/g, "");
            maskedText = maskedText.replace(/(\d{3})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/(\d{3})(\d)/, "$1.$2");
            maskedText = maskedText.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        return maskedText.substring(0, 14);
    } else if (maskType === "cep") {
        if (maskedText.length <= 8) {
            maskedText = maskedText.replace(/\D/g, "")
            maskedText = maskedText.replace(/^(\d{2})(\d)/, "$1.$2")
            maskedText = maskedText.replace(/\.(\d{3})(\d)/, ".$1-$2")
        }
        return maskedText.substring(0, 8);
    } else if (maskType === "token") {
        if (maskedText.length <= 6) {
            maskedText = maskedText.replace(/\D/g, "")
        }
        return maskedText.substring(0, 6);
    } else if (maskType === "phone") {
        if (maskedText.length <= 14) {
            maskedText = maskedText.replace(/\D/g, "")
            maskedText = maskedText.replace(/^(\d)/, "($1")
            maskedText = maskedText.replace(/(.{3})(\d)/, "$1)$2")
            if (maskedText.length == 9) {
                maskedText = maskedText.replace(/(.{1})$/, "-$1")
            } else if (maskedText.length == 10) {
                maskedText = maskedText.replace(/(.{2})$/, "-$1")
            } else if (maskedText.length == 11) {
                maskedText = maskedText.replace(/(.{3})$/, "-$1")
            } else if (maskedText.length == 12) {
                maskedText = maskedText.replace(/(.{4})$/, "-$1")
            } else if (maskedText.length > 12) {
                maskedText = maskedText.replace(/(.{4})$/, "-$1")
            }
        }
        return maskedText.substring(0, 14);
    } else if (maskType === "phone") {
        if (maskedText.length <= 14) {
            maskedText = maskedText.replace(/\D/g, "")
            maskedText = maskedText.replace(/^(\d)/, "($1")
            maskedText = maskedText.replace(/(.{3})(\d)/, "$1)$2")
            if (maskedText.length == 9) {
                maskedText = maskedText.replace(/(.{1})$/, "-$1")
            } else if (maskedText.length == 10) {
                maskedText = maskedText.replace(/(.{2})$/, "-$1")
            } else if (maskedText.length == 11) {
                maskedText = maskedText.replace(/(.{3})$/, "-$1")
            } else if (maskedText.length == 12) {
                maskedText = maskedText.replace(/(.{4})$/, "-$1")
            } else if (maskedText.length > 12) {
                maskedText = maskedText.replace(/(.{4})$/, "-$1")
            }
        }
        return maskedText.substring(0, 14);
    } else if (maskType === "brl") {
        maskedText = maskedText + '';
        maskedText = parseInt(maskedText.replace(/[\D]+/g, ''));
        maskedText = maskedText + '';
        maskedText = maskedText.replace(/([0-9]{2})$/g, ",$1");
        if (maskedText.length > 6) {
            maskedText = maskedText.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
        if (text[0] === "-") {
            return "-" + maskedText;
        } else {
            return maskedText;
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


