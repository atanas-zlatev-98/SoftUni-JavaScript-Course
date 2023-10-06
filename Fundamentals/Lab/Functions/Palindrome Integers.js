function palindrome(arr){

    for(let num of arr){
        let isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }


    function checkIfPalindrome(num){

        let numAsString = String(num);
        let reversedNumString = '';


        for(let i = numAsString.length - 1; i>= 0;i--){
            let currentChar = numAsString[i];
            reversedNumString += currentChar;
        }

        let isPalindrome = numAsString == reversedNumString;
        return isPalindrome;

    }



}

palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);
