function greet(city, country) {
    console.log(`Hello ${this.name} from ${city}, ${country}`);

}

const person = {
    name: 'John'
}

greet.call(person, 'Bareilly', 'India'); // Hello John from Bareilly, USA