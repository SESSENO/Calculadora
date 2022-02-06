const meuModulo = require('./meu_modulo')
const inquirer = require('inquirer')
const soma = meuModulo.soma
const subtracao = meuModulo.subtracao
const divisao = meuModulo.divisao
const multiplicacao = meuModulo.multiplicacao

inquirer.prompt([
    {
        name:'n1',
        message:'Digite o valor de n1:'
    },
    {
        name:'n2',
        message:'Digite o valor de n2:'
    },
    {
        name: 'op',
        message: 'Digite o código da operação => 1 - soma, 2 subtracao, 3 divisao, 4 multiplicacao: '
    }
]).then((answers) =>{
    
    let n1 = parseFloat(answers.n1)
    let n2 = parseFloat(answers.n2)
    let op = parseFloat(answers.op)
    
    switch(op) {
        case 1:
            soma(n1,n2);
            break;
        case 2:
            subtracao(n1,n2);
            break;
        case 3:
            divisao(n1,n2);
            break;
        case 4:
            multiplicacao(n1,n2);
            break;
        default:
            console.log("Código de operação inválido!");
    }

}).catch((err) => console.log(err)) //Tratamento para retorno.