export abstract class animal {
    
    nome: string
    idade: number

      constructor(

        nome: string,
        idade: number,
        ){
        this.nome= nome
        this.idade = idade
        }

       emitirSom(){
        console.log (`Esse animal emite esse Som:`)
    }
        abstract som(): void
        abstract corre(): void
    }