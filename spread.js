
function display(first, second, ...rest) {
    console.log("First", first);
    console.log("second", second);
    console.log("Rest", rest);
}

const arr = [1, 2, 3, 4, 5];
display(...arr);