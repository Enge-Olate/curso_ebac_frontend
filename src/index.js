const alunos =[
    {
        nome:'José', nota: 8
    },
    {
        nome:'Márcio', nota:10
    },
    {
        nome:'Bianca', nota: 6
    },
    {
        nome:'Matheus', nota: 5
    },
    {
        nome:'Júlia', nota:5
    },
    {
        nome:'Suzanne', nota:6
    }
];
function retornaMaiorNota(alunos){
    return alunos.filter(aluno=> aluno.nota >= 6);
}
const alunosAprovados = retornaMaiorNota(alunos);
console.log('-----Alunos------');
console.log(alunos);
console.log('-----Alunos aprovados-----');
console.log(alunosAprovados);
