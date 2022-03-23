class Noticia{
    constructor(titulo, data_de_publicaçao, resumo, texto){
        this.titulo = titulo;
        this.data_de_publicaçao = data_de_publicaçao;
        this.resumo = resumo;
        this.texto = texto;
    }
    mostrarnoticia(){
      return this.titulo +"\n"+ this.data_de_publicaçao +"\n"+ this.resumo +"\n\n"+ this.texto
     
    }
}

let jornal = new Noticia("estudante tem 5 provas no dia","23/03/2022","estudante do ifms tem 5 provas no mesmo dia e quase tem um derrame.","ifms entra em semana de prova, e um aluno apos descobrir que tem 5 provas no mesmo dia acaba tendo um derrame.")
console.log(jornal.mostrarnoticia())