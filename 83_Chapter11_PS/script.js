
class Complex{
  //Chapter 11 - 1st Question
  constructor(real, imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }

  //Chapter 11 - 2nd Question
  add(num){
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }

  //getters and setters of real and imaginary numbers
  get real(){
    return this._real;
  }
  set real(givenReal){
    this._real = givenReal;
  }
  get imaginary(){
    return this._imaginary;
  }
  set imaginary(givenImaginary){
    this._imaginary = givenImaginary;
  }
}
let a = new Complex(5,2);
let b = new Complex(2,4);
a.add(b);
console.log(`${a.real}+${a.imaginary}i`);