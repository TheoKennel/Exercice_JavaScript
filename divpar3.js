// Le résultat obtenu doit être divisible par 3 


const c1 = 123;
const c2 = 20;



const resultatDivPar3 = (chiffre) => {
    if (chiffre % 3 === 0 ) {
        console.log("Le résultat de " + chiffre + " /3  = " + (chiffre/3))
    }   else {
        console.log("Le chiffre " + chiffre + " n'est pas divisible par 3")
    }
}


resultatDivPar3(c1);
resultatDivPar3(c2);

