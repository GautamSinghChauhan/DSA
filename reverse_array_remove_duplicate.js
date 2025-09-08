// revserse array
function reversearr(arr) {
    let start = 0;
    let end = arr.length-1;
    let temp;
    while(start < end){
      temp=arr[start];
      arr[start]=arr[end];
      arr[end] =temp;
      start++;
      end--;
      
    }    
    return [...new Set(arr)];
  }
  
  let result=reversearr([1,2,3,3,4,4,5,7,7,8,8]);
  console.log(result);