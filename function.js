const double = function(number) {
    return number * 2;
}
 const fullName = function(firstName, lastName) {
    return firstName + " " + lastName;
 }
 const average = function(num1, num2 ) {
    return (num1 + num2) / 2;
 }
  const isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
  }
 const aabsoluteValue = function(number) {
    return Math.abs(number);
 }
 const total = function (price, taxRate,tipRate) {
    return price + (price * taxRate) + ( tipRate);
 }
 const isOlder  = function(age1, age2) {
    if (age1 > age2) {
    return age1;
    }
    else {
        return age2;    
 }}

 const randomNumber  = function() {
    return Math.random();
 }
const coinFlip = function() {
    if( Math.random() >= 0.5){
        return "heads";
    }
    else {
        return "tails";
    }


}

