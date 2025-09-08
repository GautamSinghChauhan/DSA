Object.defineProperty(Math, 'PI', {
    value: 3.14,
    writable: false, // Ensures the property is read-only
    configurable: true, // Allows the property to be changed again
    enumerable: true
});

console.log(Math.PI); // Outputs: 3.14




