class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
}

module.exports.MyMath = MyMath;
