function checkPalindrome() {
    const dob = document.getElementById('dob').value;
    const Output = document.getElementById('output')

    const cleanedDob = dob.split('-').join('')

    const reversedob = cleanedDob.split('').reverse().join('')

    console.log(cleanedDob)

    console.log(reversedob)
    if (cleanedDob === reversedob) {
        Output.innerText = 'Your Bday Date is Palindrome';
    } else {
        Output.innerText = 'Your Bday Date is Not a palindrome';
    }
}