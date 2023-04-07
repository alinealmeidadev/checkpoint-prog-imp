//Passo 1 (1,5 pontos)

//Crie uma Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 

class aluno {
	constructor(nome, faltas, notas) {
		this.nome = nome;
		this.faltas = faltas;
		this.notas = notas
	}

//Passo 2 (1,5 pontos)

//Na Classe Aluno crie o método calcularMedia que retorna a média de suas notas.
	calcularMedia(){
		let soma = 0;
		for (let i = 0; i < this.notas.length; i++) {
			soma += this.notas[i]
		}
		return soma / this.notas.length;
	}
//Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua Classe. 

	faltasAluno() {
		this.faltas++;
	}
}


//Passo 3 (1,5 pontos)

//crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
// Criando uma classe Curso
class curso {
    constructor(nomeDoCurso, notaAprovacao, faltasMaximas, listaDeEstudantes) {
      this.nomeDoCurso = nomeDoCurso;
      this.notaAprovacao = notaAprovacao;
      this.faltasMaximas = faltasMaximas;
      this.listaDeEstudantes = listaDeEstudantes;
    }
}
/* 

 Passo 4 (1,5 pontos)

	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
 Passo 5 (2 pontos)

	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
 Passo 6 (2 pontos)

	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
 */
