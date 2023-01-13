function gimme(triplet) {
    let ans = 2;
    let a = triplet[0];
    let b = triplet[1];
    let c = triplet[2];
  
    if (a < 0 && b < 0 && c < 0) {
      a = a * -1;
      b = b * -1;
      c = c * -1;
    }
  
    if (a + b > a + c && b + c < a + b) {
      if (a > b) {
        ans = 1;
      } else {
        ans = 0;
      }
    } else if (b + c > a + c) {
      if (b < c) {
        ans = 1;
      } else {
        ans = 2;
      }
    } else if (a + b < b + c) {
      if (a < c) {
        ans = 0;
      } else {
        ans = 2;
      }
    }
  
    if (a < 0 && b < 0) {
      if (a > b) {
        ans = 0;
      } else {
        ans = 1;
      }
    } else if (a < 0 && c < 0) {
      if (a > c) {
        ans = 0;
      } else {
        ans = 2;
      }
    } else if (b < 0 && c < 0) {
      if (b > c) {
        ans = 1;
      } else {
        ans = 2;
      }
    }
    if (a < 0 && b > 0 && c > 0) {
      if (b > c) {
        ans = 2;
      } else {
        ans = 1;
      }
    } else if (b < 0 && a > 0 && c > 0) {
      if (a > c) {
        ans = 2;
      } else {
        ans = 0;
      }
    } else if (c < 0 && a > 0 && b > 0) {
      if (a > b) {
        ans = 1;
      } else {
        ans = 0;
      }
    }
    return ans;
  }