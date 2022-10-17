



//_____________________________
// console.log('TypeScript')
//_____________________________








//________________________________
// function soma(a: number, b: number) {
//     return a + b
// }

// console.log(soma(1, 2));


// Solve - Duplicate function implementation in TypeScript
// https://bobbyhadz.com/blog/typescript-duplicate-function-implementation
// export{};
//________________________________








// interfaces
// servem para definir contratos de estruturas de dados, de uma classe que for ser definida
//______________________________
// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executarRugido(alturaDecibeis: number): void; 
// }

// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean;
// }

// const animal: IAnimal = {
//     nome: 'elefante',
//     tipo: 'terrestre',
//     executarRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`),
// }

// // animal.executarRugido()

// // const felino: IFelinos = {
// //     nome: 'leão',
// //     tipo: 'terrestre',
// //     visaoNoturna: true,
// // }
//______________________________________________












//  types
// servem para juntar diferentes interfaces, fazer "merge" entre interfaces
// servem para definir que uma variável pode ser uma interface ou outra interface

// exemplo 01 mostrando um type
//______________________________________________
// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executarRugido(alturaDecibeis: number): void; 
// }

// type IAnimal = { //observe que o type precisa do sinal =
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executarRugido(alturaDecibeis: number): void; 
// }


// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean;
// }

// const animal: IAnimal = {
//     nome: 'elefante',
//     tipo: 'terrestre',
//     executarRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`),
// }

// animal.executarRugido()

// const felino: IFelinos = {
//     nome: 'leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }
//______________________________________________



















// // exemplo 01 mostrando um type - continuação do vídeo
// //______________________________________________
// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     domestico: boolean;
// }

// // type IAnimal = { //observe que o type precisa do sinal =
// //     nome: string;
// //     tipo: 'terrestre' | 'aquático';
// //     executarRugido(alturaDecibeis: number): void; 
// // }


// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'médio' | 'grande';
// }


// type IDomestico = IFelino | ICanino;


// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'médio',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }

// // animal.executarRugido()

// // const felino: IFelinos = {
// //     nome: 'leão',
// //     tipo: 'terrestre',
// //     visaoNoturna: true,
// // }
// //______________________________________________























// videoaula relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces - Tratando a tag input
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/004fb2eb-11c2-4e87-8377-aa96b50ff9b3?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

//_____________________________________________
// const input = document.getElementById('input') as HTMLInputElement;
// // input.value // pra mostrar que se retirar a especificação com o as dá erro pois o HTMLElement genérico não possui o atributo value

// input.addEventListener('input', (event) => {
//     // console.log("digitei");

//     const i = event.currentTarget as HTMLInputElement; 
//     //event é o evento quando está sendo digitado no input

//     console.log(i.value)
// })
//_____________________________________________





















// Videoaula Relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces - O que são Generic types
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/c4a1e63f-b36f-4f07-99ef-bbb504c1134a?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

//_________________________________________________
// //esse <T> abaixo geralmente esse T maiúsculo é usado quando não se sabe o que se vai receber
// function adicionaApendiceALIsta<T>(array: any[], valor: T) {
//     return array.map(item => valor)
// }

// adicionaApendiceALIsta([ 1, 2, 3 ], 1);

// adicionaApendiceALIsta([ 'A', 'B', 'C' ], 'd');
//_________________________________________________



















// // Videoaula relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces - Desenvolvendo condicionais a partir de parâmetros {no caso com IN}
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/172a4642-a659-438a-b9f7-959ce6c0afb9?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

//_______________________________________________________
// interface IUsuario {
//     id: string,
//     email: string,
// }

// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'coordenador' | 'supervisor';    
// }

// function redirecione(usuario: IUsuario | IAdmin) {
//     if ('cargo' in usuario) {
//         //redirecionar para a área de administração
//     }

//     //redirecionar para a área do usuário
// }
//_______________________________________________________




















// // videoaula relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces - Utilizando o caracter "?" para variáveis opcionais
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/a48f32d0-4dd8-4930-b891-b806837b1b47?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

//___________________________________________________
// interface IUsuario {
//     id: string;
//     email: string;
//     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
// }

// function redirecione(usuario: IUsuario) {
//     if(usuario.cargo) {
//         //redirecionar (usuario.cargo);
//     }

//     //redirecionar para a área de usuário

// }
//___________________________________________________




















// // videoaula relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces - Criando variáveis com propriedade readonly e private
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/72a82f36-d6d6-4101-aae8-4dfe943d5cae?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

//___________________________________________________
// interface ICachorro {
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {

//     // readonly[k in keyof ICachorro]: ICachorro[k]; //assim é feita a iteração de todos os itens que foram adicionados dizendo que esses valores serão somente de leitura
//     +readonly[k in keyof ICachorro] -? : ICachorro[k]; //a linha acima foi acrescentada do -? afim de remover os valores opcionais; e o + na frente melhora a experiência de leitura para outros programadores

//     //observando a classe abaixo, MeuCachorro, conforme esperado, exibirá o erro: 
//             // class MeuCachorro
//             // Class 'MeuCachorro' incorrectly implements interface 'CachorroSomenteLeitura'.
//             //   Property 'parqueFavorito' is missing in type 'MeuCachorro' but required in type 'CachorroSomenteLeitura'.ts(2420)
//             // index.ts(353, 5): 'parqueFavorito' is declared here.

// }

// class MeuCachorro implements CachorroSomenteLeitura {
//     idade;
//     nome;
//     // parqueFavorito; // a adição dessa linha satisfaz a condição de resolução do erro mostado acima

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Apolo', 14);
// // cao.idade = 8;

// // console.log(cao);
//___________________________________________________





















// // videoaula relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces - Como importar bibliotecas com typescript
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/939fb3d3-c677-4653-8211-b0909962ac1f?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

//_______________________________________________
// extender um biblioteca mas sem mexer nos types que estão definidos dentro dela

// mostra criando um arquivo typings.d.ts
//_______________________________________________



// exemplo 01 para mostrar que as interfaces de mesmo nome vão tendo as propriedades adicionadas
//_________________________________________
// interface IEstudante {
//     nome: string;
//     idade: number;
// }

// interface IEstudante {
//     serie: string;
// }

// const estudante: IEstudante = {

// }
//__________________________________________














// // videoaula relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces
// // Como importar bibliotecas com typescript
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/939fb3d3-c677-4653-8211-b0909962ac1f?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

// importando jquery
// aula péssima professor muito ruim. Depoisde estudar em outras fontes, rever e tentar entender
//________________________________________
// import * as $ from "jquery";
// $.fn.extend((
//     novaFuncao() {
//         console.log('chamou nova funcao');
// }))
//_________________________________________

























// videoaula relacionada na DIO - Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces - Exemplo de como usar Omit e conclusão do curso
// https://web.dio.me/course/introducao-ao-typescript-explorando-classes-tipos-e-interfaces/learning/29973d54-5d2e-48de-b4c0-320b5dfc04d2?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

//___________________________________________________________
// interface IPessoa {
//     nome: string;
//     idade: number;
//     nacionalidade: string;
// }

// interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'> {
// }

// const brasileiro: IBrasileiro = {
//     nome;
//     idade;
//     // náo é pra aparecer nacionalidade   
// }
//___________________________________________________________




