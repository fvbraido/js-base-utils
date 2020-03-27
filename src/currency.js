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
