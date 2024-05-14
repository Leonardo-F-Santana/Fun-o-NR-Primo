function primo(numero) {
    // Verifica se o número digitado é "1", que não é primo
    if (numero !== 1) {
        for (var i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false; // Não é primo
            }
        }
        return true; // É primo
    } else {
        return false; // Não é primo (1 não é considerado primo)
    }
}

//Usando:
var numeroTeste = 13; // Substitua pelo número que deseja testar
if (primo(numeroTeste)) {
    console.log(numeroTeste + " é primo!");
} else {
    console.log(numeroTeste + " não é primo.");
}
