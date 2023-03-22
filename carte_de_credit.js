/* Écrire une fonction qui prend un numéro de carte de crédit et vérifie qu'il est valide.
Voilà les grands modèles de cartes de crédits :
American Express :- Starting with 34 or 37, length 15 digits.
Visa :- Starting with 4, length 13 or 16 digits.
MasterCard :- Starting with 51 through 55, length 16 digits.
Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits. */

const validateCard = (cardNumber) => {
    const regexAmericanExpress = /^34|37\d{13}$/;
    const regexVisa = /^4\d{12}(\d{3})?$/;
    const regexMasterCard = /^5[1-5]\d{14}$/;
    const regexDiscover = /(^6011\d{12})|(^5\d{14})$/;
    const regexDinersClub = /(^30[0-5]\d{11})|(^36\d{12}|^38\d{12})$/;
    const JCB = /(^2131|1800\d{11})|(^35\d{14})$/

    if (regexAmericanExpress.test(cardNumber)) {
        return "American Express, numéro de carte valide";
    } else if (regexVisa.test(cardNumber)) {
        return "Visa, numéro de carte valide";
    } else if (regexMasterCard.test(cardNumber)) {
        return "MasterCard, numéro de carte valide";
    } else if (regexDiscover.test(cardNumber)) {
        return "Discover, numéro de carte valide";
    } else if (regexDinersClub.test(cardNumber)) {
        return "Diners Club, numéro de carte valide";
    } else if (JCB.test(cardNumber)) {
        return "JCB, numéro de carte valide";   
    } else {
        return "numéro de carte invalide";
    }
}

console.log(validateCard("5412345678965412"));
console.log(validateCard("6011123456789012"));
console.log(validateCard("601112345678901"));
console.log(validateCard("512345678945612"));
console.log(validateCard("30212345678945"))//vrai 
console.log(validateCard("36123456987452"))//
console.log(validateCard("38123456789654"))

console.log(validateCard('180012345698745'))

