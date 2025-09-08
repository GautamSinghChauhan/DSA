function classifyCharacter(char) {
    // Convert the character to lowercase
    char = char.toLowerCase();
    // Check if the character is a vowel
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        return 'Vowel';
    }
    // Check if the character is a letter and not a vowel
    else if (char >= 'a' && char <= 'z') {
        return 'Consonant';
    }

    return 'Not a valid letter';
}

console.log(classifyCharacter('u')); // Vowel



