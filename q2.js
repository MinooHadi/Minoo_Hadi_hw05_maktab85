let stepCounter = {
  step: 0,
  increase: function () {
    this.step++;
    return this;
  },
  decrease: function () {
    if (this.step != 0) {
      this.step--;
    }
    return this;
  },
  reset: function () {
    this.step = 0;
    return this;
  },
  read: function () {
    console.log(this.step);
    return this;
  },
};
stepCounter
  .increase() //step = 1
  .increase() //step = 2
  .decrease() //step = 1
  .increase() //step = 2
  .decrease() //step = 1
  .read() // 1
  .reset() // step = 0
  .read() // 0
  .decrease() //step = 0
  .read(); // 0
