// fiven X elements and y per_page, return how many pages are needed
export function paginate(length, per_page, page) {
    // declare variables
    var numberPages = [];
    var start_range = 1;
    var end_range = 1;

    // default per_page
    if (!per_page) {
      per_page = 5;
    }

    // default page
    if (!page) {
      page = 1;
    }

    // calculates the index to start and end an array, paginating it
    if ( (length - 1) < (per_page*page - 1) ) {
      page = Math.ceil(length/per_page);
      start_range = per_page * ( page - 1);
      end_range = length - 1
    } else {
      start_range = per_page * ( page - 1);
      end_range = (per_page*page) - 1
    }

    for (var i = 1; i <= Math.ceil(length/per_page); i++) {
      numberPages.push(i);
    }

    return {start_range, end_range, numberPages};
}

// return array of numbers from x to x+k
export function rangeToArray(start_range, end_range){
  var numberPages = [];
  for (var i = start_range; i <= end_range; i++) {
    numberPages.push(i);
  }
  return numberPages;
}
