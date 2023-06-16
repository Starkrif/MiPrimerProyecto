let Ticket={
    from : "Santiago",
    to : "Caracas",
    price : 50
}
console.log(Ticket);
let person={
    firstName : "Alejandro",
    lastName : "Canelas"
}
person.firstName="Alejandro";
person.lastName="Canelas";
console.log(person.firstName+" "+person.lastName);
//Arreglos Biblioteca
let libro = [{
    Titulo:"SpeakingJavaScript",
    Autor:"Axel Rauschmayer",
    Paginas:460 
},
{
    Titulo:"ProgrammingJavaScript",
    Autor:"Eric Elliot",
    Paginas:254 
},
{
    Titulo:"Understanding ECMAScript",
    Autor:"Nicholas C.Zakas",
    Paginas: 352 
}];
libro.push({Titulo:"LearningJacaScriptDesingPatterns",Autor: "Addy Osmani",Paginas:254})
console.log(libro);
console.log(libro.length);
let libro2=libro.slice(-2)
console.log(libro2);
libro.shift();
console.log(libro.length);
console.log(libro);
console.log(libro[0].Paginas+libro[1].Paginas+libro[2].Paginas);

