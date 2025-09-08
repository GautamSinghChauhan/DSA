
const arrray = ['a','b','c','d'];

for (var prop of arrray) {
 console.log(prop)
}


const obj ={
  name : 'Gautam',
  age : '30'
};
for( const key in obj){
  console.log(`${key} : ${obj[key]}`);
}