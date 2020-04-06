// fiven X elements and y per_page, return how many pages are needed
export function paginate(start_range, end_range, page) {
  var buttons = []
  if (start_range >= 0 && end_range >= 0 && page >= 1) {
    if (end_range <= 6) {
      buttons = rangeToArray(start_range, end_range)
    } else {
      if (page <= start_range + 3) {
        buttons = rangeToArray(start_range, 5)
        buttons.push("...")
        buttons.push(end_range)
      } else if (page > start_range + 3 && page < end_range - 3) {
        buttons.push(start_range)
        buttons.push("...")
        buttons = buttons.concat(rangeToArray(page - 1, page + 1))
        buttons.push("...")
        buttons.push(end_range)
      } else {
        buttons.push(start_range)
        buttons.push("...")
        buttons = buttons.concat(rangeToArray(end_range - 4, end_range))
      }
    }
  } else {
    buttons = [1]
  }
  if (buttons.length <= 1) {
    buttons = [1]
  }
  return buttons
}

// return array of numbers from x to x+k
export function rangeToArray(start_range, end_range) {
  var numberPages = [];
  for (var i = start_range; i <= end_range; i++) {
    numberPages.push(i);
  }
  return numberPages;
}
