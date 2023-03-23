function convertPalindromes(numbers) {
    let num = [];
    for(let i = 0; i < numbers.length; i++) { 
        let newNum = String(numbers[i]);
        let numeroRever = newNum.split('').reverse().join('')
    if (newNum === numeroRever) {
      num.push(1)
    } else {
      num.push(0)
    }
   }
    return num
}
const convert = [101, 2, 85, 33, 14014]
console.log(convertPalindromes(convert));