// exercicio de JavaScript 
console.log("Meu primeiro script foi executado!");
console.log("Painel de Estudos");
console.log("Estou praticando JavaScript.");
console.log("Soma de exemplo:", 10 + 5);

const nomeAluno = "Enzo Musskopf"; 
const curso = "Engenharia de Software";
let tarefasConcluidas = 2;

console.log("Tarefas no começo:", tarefasConcluidas);
tarefasConcluidas = tarefasConcluidas + 1;
console.log("Tarefas depois de estudar:", tarefasConcluidas);

// var é uma forma mais antiga de declarar uma variavel.
var exemploAntigo = "Exemplo de variável com var";
console.log(exemploAntigo);

//exemplos 
const materia = "JavaScript"; // string
const horasEstudadas = 2; // number
const estudandoHoje = true; // boolean
const anotacao = null; // null
console.log(materia, horasEstudadas, estudandoHoje, anotacao);

//contas relacionadas aos estudos.
const tarefasDaSemana = 5;
const tarefasFeitas = 3;
const totalComMaisUma = tarefasFeitas + 1;
const faltam = tarefasDaSemana - tarefasFeitas;
const minutosPorTarefa = 30;
const minutosEstudados = tarefasFeitas * minutosPorTarefa;
const mediaPorDia = minutosEstudados / 3;
const pertoDaMeta = tarefasFeitas >= tarefasDaSemana;

console.log("Com mais uma tarefa:", totalComMaisUma);
console.log("Ainda faltam:", faltam);
console.log("Minutos estudados:", minutosEstudados);
console.log("Média de minutos por dia:", mediaPorDia);
console.log("A meta foi atingida?", pertoDaMeta);

const mostrar = `O aluno ${nomeAluno}, do curso de ${curso}, concluiu ${tarefasConcluidas} tarefas e estudou ${horasEstudadas} horas.`;
console.log(mostrar);

const nota = 7;
if (nota >= 6) {
  console.log(`Com nota ${nota}, passou na matéria.`);
} else {
  console.log(`Com nota ${nota}, precisa estudar mais.`);
}

//calcular o tempo de uma sessão de estudos.
const minutosSessao = 40;
let numeroSessoes = 2;
const tempoTotal = minutosSessao * numeroSessoes;
const tempoLivre = 100 - tempoTotal;
const mensagem = `${numeroSessoes} sessões de ${minutosSessao} minutos dão ${tempoTotal} minutos de estudo.`;
console.log(mensagem);
console.log(`Ainda sobram ${tempoLivre} minutos do meu tempo livre.`);

if (tempoTotal <= 100) {
  console.log("Consigo fazer essas sessões hoje.");
} else {
  console.log("Não consigo fazer essas sessões hoje.");
}
