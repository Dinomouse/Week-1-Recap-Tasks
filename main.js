function smash (words) {
    let emptyString="";
    for(i=0; i < words.length; i++){
        emptyString= emptyString + " " + words[i];
    }
    let trimmedString = emptyString.trim();
    return trimmedString;
 };


function sheep(num){
    let emptyString=""
    for(i=0;i<num;i++){
      emptyString = emptyString + `${i+1} sheep...`
    }
    return emptyString;
  }


function getCount(str) {
    let vowelsCount = 0;
    const vowelArr = ["a","e","i","o","u"]
    
    for(i=0; i<str.length; i++){
      if((vowelArr.indexOf(str[i]))>-1){
       vowelsCount = vowelsCount + 1;}
      }
    return vowelsCount;
//   }

function squareDigits(num){
    let numString = num.toString()
    let emptyString = ""
    for(i=0;i<numString.length;i++){
      emptyString = emptyString + (Number(numString[i]))**2;
    }
    return Number(emptyString);
  }

let attempts = 0;
let enterpassword = prompt("Please enter Password");
let correctPassword = "Arian";

while (attempts < 3){
    enterpassword = prompt("Please enter Password")
    if(enterpassword === correctPassword){
        alert("My secret info");
        break;
    } else if (enterpassword !== correctPassword){
        attempts++;
        enterpassword;
        console.log(attempts);
    }
}


// takes a yes string for true, no string for false

function boolToWord( bool ){
    if(bool=== true){
        return "yes"
    } else {
        return "no"
    }
  }

  


  //transform number into a string

  function numberToString(num) {
    const convertedNumber = num.toString();
    return convertedNumber; 
  }


function getMiddle(s)
{
    if((s.length)%2 === 0){
        const index1 = s[((s.length)/2)-1];
        const index2 = s[((s.length)/2)];
        return index1 + index2;

    }
    else if((s.length)%2 !== 0){
        const index1 = s[((s.length)-1)/2];
        return index1;
    }
}


function nbYear(p0, percent, aug, p) {
    let currentPop = p0;
    let count = 0;
    while(currentPop <= p){
      currentPop = currentPop*(1+percent/100) + aug;
      count++;
      console.log(currentPop)
    
  }return count;
    }
