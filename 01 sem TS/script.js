
// Videoaula relacionada no site da DIO - TypeScript: Introdução ao TypeScript, Classes, Tipos, Intefaces (4min)
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/3fef7cb5-3637-4a05-8af3-e6e327971980?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined
// https://youtu.be/33RJcYmbEb8





//Algumas vantagens do TypeScript:
//- TypeScript é como se fosse uma extensão do JavaScript. Ele adiciona checagem de tipos, e várias outras features que o JavaScript não tem nativamente que facilitarão a vida do desenvolvedor acelerando o processo de desenvolvimento reduzindo a quantidade de código a ser escrita





// exemplo 01 - Sem TypeScript
//__________________________________________________
// function soma(a, b) {return a + b};

// console.log(soma(1,2)); //observe que não há verificação do que é passado como parâmetro para a função

// console.log(soma('a', 'b')); // retorna a concatenção das strings
//__________________________________________________













// exemplo 01 - Sem TypeScript - adicionando a verificação se os parâmetros são números
//__________________________________________
function soma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } 
};

console.log(soma('a', 'b')); //undefined

console.log(soma(1, 2)); //3
//___________________________________________












