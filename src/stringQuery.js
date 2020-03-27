// Paginate
export function searchPaginate(url, previous_page, new_page) {
    var replace = new RegExp(`&page=${previous_page}`, 'g');
    url = url.replace(replace, '');
    url = `${url}&page=${new_page}`;
    return url;
}

// Search per Input
export function searchInput(url, valueKey, value, previous_value, previous_page, new_page) {
    // Only for empty per_page
    if (valueKey === "per_page" && previous_value === "") {
      previous_value = 10;
    }
    var replace = new RegExp(`&${valueKey}=${previous_value}`, 'g');
    var replacePage = new RegExp(`&page=${previous_page}`, 'g');
    url = url.replace(replace, '');
    url = url.replace(replacePage, '');
    if (value !== "") {
      url = `${url}&page=${new_page}&${valueKey}=${value}`;
    }
    return url;
}

// Toggle the search expression, in and out, completly
export function searchToggle(url, value) {
  if (url.includes(value)) {
    var replace = new RegExp(`${value}`, 'g');
    url = url.replace(replace, '');
  } else {
    url = `${url}${value}`;
  }
  return url;
}

// Search per Button (for custom 01 bedroom etc, tvs, etc)
export function searchButton(url, value, previous_value) {
    // Only for empty per_page
    url = url.replace(`${previous_value}`, '');
    if (value !== "") {
      url = `${url}${value}`;
    }
    return url;
}

export function arrayToUrlArray(array, key) {
    var urlArray = ""
    array.map.map((item) => (
      urlArray = urlArray + `&${key}%5B%5D=${item}`
    ))
    return urlArray;
}
