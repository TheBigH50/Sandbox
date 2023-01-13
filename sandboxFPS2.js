function gimme(triplet) {
    let ans = 0;
    let a = triplet[0];
    let b = triplet[1];
    let c = triplet[2];
  
    if (a < 0 && b < 0 && c > 0) {
      a = a * (-c * 1.5);
      b = b * (-c * 1.5);
    } else if (a > 0 && b < 0 && c < 0) {
      b = b * (-a * 1.5);
      c = c * (-a * 1.5);
    } else if (a < 0 && b > 0 && c < 0) {
      a = a * (-b * 1.5);
      c = c * (-b * 1.5);
    } else if (a < 0 && b < 0 && c < 0) {
      a = a * -1;
      b = b * -1;
      c = c * -1;
    }
  
    if (a < b && c < a && b > c) {
      ans = 0;
    } else if (a < b && a > c && b < c) {
      ans = 0;
    } else if (a > b && a < c && b < c) {
      ans = 0;
    } else if (a > b && a < c && b < c) {
      ans = 0;
    } else if (a < b && b < c) {
      ans = 1;
    } else if (a > b && b > c) {
      ans = 1;
    } else {
      ans = 2;
    }
    return ans;
  }