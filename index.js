function getDivisorsCnt(n){
  let count = [];
    for(let i = 1; i <= n; i++) {
      console.log(i);
      if(n % i == 0) {
        count.push(i);
      }
    } console.log(count.length); return count.length;
}