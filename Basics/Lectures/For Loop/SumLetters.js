function sumLetters(input) {
    let text = input[0];
    let value = 0;

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        switch (letter) {
            case 'a': value += 1; break;
            case 'e': value += 2; break;
            case 'i': value += 3; break;
            case 'o': value += 4; break;
            case 'u': value += 5; break;
        }
    }
    console.log(value);

}

sumLetters(['bamboo']);
sumLetters(['hello']);
sumLetters(['hi']);
sumLetters(['beer']);


