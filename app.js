module.exports = {
  pel: function() {
    console.log("palimdrome number are:")
    for (let i = 1; i <= 100; i++) {
      let rev = 0;
      rev = (10 * rev) +  i % 10;
      if (i > 0) {
        let rem = i % 10;
        let rev = 10 * rev + rem
      }
      if (i == rev) {
        console.log(rev);
      }

    }
  },
  arm: function() {
    console.log("amstrong numbers are :")

    for (let num = 1; num <= 1000; num++) {
      let dig1 = num % 10;
      let dig2 = num % 100;
      let rem2 = parseInt(dig2 / 10);
      let dig3 = parseInt(num / 100);
      let sum = (dig1 * dig1 * dig1) + (rem2 * rem2 * rem2) + (dig3 * dig3 * dig3);
      if (num == sum) {
        console.log("it is a armstrongnumber" + sum);
      }
    }

  },
  ele: function(cusid, units) {
    console.log("customer id  :" + cusid)
    console.log("customer total units used  :" + units)
    var total = units * 10;
    console.log("total payment amount :" + total)
  }

}
