// replace the word "negativos"
export function replaceNegativos(string) {
  if (string.includes("negativos")) {
    string = string.replace(/ negativos/g,'')
  }
  return string;
}


// COrrect Sign to display on Receipts of Invoices
export function signBasedOnTotal(total, local_amount) {
  if (local_amount && total) {
    if (total >= 0) {
      return decimalToCurrencyBrazilian(local_amount)
    } else {
      return decimalToCurrencyBrazilian(local_amount * (-1))
    }
  } else {
    return 0
  }
}


export function decimalToCurrencyBrazilian(value) {
  if (value) {
    var valueString = String(value);
    if (valueString.charAt(0) !== "R"){
      valueString = valueString.replace(/\,/g,'')
      valueString = valueString.replace(/\./g,',')
      valueString = `R$ ${valueString}`
      if (valueString.includes(",")) {
        const splitted = valueString.split(',');
        if (splitted[1].length === 1) {
          valueString = `${valueString}0`
        }
      } else {
        valueString = `${valueString},00`
      }
      return valueString;
    } else {
      return valueString;
    }
  } else {
    return `R$ 00,00`;
  }
}

// Currency input to decimal output
export function currencyToDecimal(value) {
  var valueString = String(value);
  valueString = valueString.replace(/\./g,'')
  valueString = valueString.replace(/\_/g,'')
  valueString = valueString.replace(/\,/g,'.')
  valueString = valueString.replace("R$ ",'')
  if (valueString.slice(-1) === ".") {
    valueString = valueString + "0"
  }
  return valueString;
}