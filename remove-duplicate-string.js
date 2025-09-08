let str = "Hello my name is Gautam and my name is shiv and my name is rhaul";

function removeDuplicateWords(str) {
    let words = str.split(" ");
    // console.log(words);
    let uniqueWords = [...new Set(words)];
    console.log(uniqueWords);
    return uniqueWords.join(" ");
}

let result = removeDuplicateWords(str);
console.log(result); // "Hello my name is Gautam and shiv rhaul"


let str2 = "Hello my name is Gautam and my name is Ram and my name is Shyam";
function removeDuplicateWords2(string){
    let words = string.split(" ");

    // console.log(words);
    let uniqueWords2 = [... new Set(words)];
    // console.log(uniqueWords2);

    return uniqueWords2.join(" ");
    
    

}

let result2 = removeDuplicateWords(str2);
removeDuplicateWords2(result2);


let str3 = "Radha Rani ki jai Radha rani ki ho hamesa";

function removeDuplicateWordsWithoutBuiltIn(){
    let words = str3.split(" ");
    // console.log(words);
    let uniqueWords = [];
    for(let word of words){
        if(!uniqueWords.includes(word)){
            uniqueWords.push(word);
        }
    }
    console.log(uniqueWords);
    return uniqueWords.join(" ");

}

let result3 = removeDuplicateWordsWithoutBuiltIn();
console.log(result3);









function sum(x, y, z, m) {
    return x + y + z + m;
  }
  

  const numbers = [1, 2, 3,4];
  
  console.log(sum(...numbers));

  


