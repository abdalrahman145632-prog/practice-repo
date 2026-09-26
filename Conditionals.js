const canVote  = function(age) {
    if (age >= 18) 
        {
            return true;
        }
    else {
        return false;
    }

}
const getGrade = function(score) {
if (score >= 90) {
    return "A";
} else if (score >= 80) {
    return "B";
} else {
    return "C";
}

}
 const isLeapYear  = function(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
 
}

const classify = function(number) {
    if (number > 0) {
        return "positive";
    }
    else if (number < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
}
 
const canEnterClub  = function(age, hasID) {
    if (age >= 21 && hasID) {
        return true;
    }
    else {
        return false;
    }

}
const discountPrice = function(price, isMember) {
    if (isMember=== true) {
        return price * 0.9; // Apply 20% discount
    } else {
        return price;
    }
}
const triangleType  = function(a, b, c) {
    if (a === b && b === c) {   
        return "equilateral";
}
else if (a === b || b === c || a === c) {
    return "isosceles";
}
else  {
    return "scalene";

}

}
const canVote1 = function(age) {
    return age >= 18 ? true : false;
}

 const fizzBuzzOne = function(n) {
    if (n % 3 ===0){
        return "Fizz";
    }
    else if (n % 5===0) {
        return "Buzz";

    }
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }

 }
 const bmiCategory = function(weight, height) {
    let BMI = weight / (height * height);
    if (BMI<=18.5){
        return "Underweight";
    }
    else if (BMI<=25){
        return "Normal weight";
    }
    else if (BMI<=30){
        return "Overweight";
    }
    else {
        return "Obese";
    }

 }

