
function reveseString(str) {
    let len = str.length;
    let strarray = str.split();
    console.log(strarray);
    for( let i = 0; i < len/2; i++){
      let temp = strarray[i];
      strarray[i] = strarray[len - 1 - i];
      strarray[len - 1 - i] = temp;

    }

    return strarray.join(' ');
}

let str = "gautam";
console.log(reveseString(str));
