const form = document.querySelector('#form-atividade')
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji festejando" />`
const imgReprovado = `   <img src="./images/reprovado.png" alt="Emoji decepcionado" />`
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`
const notaMinima = parseFloat(prompt("Digite a nota mínima"))

const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.querySelector('#nome-atividade').value
    const inputNotaAtividade = document.querySelector('#nota-atividade').value

    if(atividades.includes(inputNomeAtividade)){
        alert(`A atividade ${inputNomeAtividade} já foi inserida`)
    }
    else {

        atividades.push(inputNomeAtividade)
        notas.push(parseFloat(inputNotaAtividade))
    
        let linha = `<tr>`
        linha += `<td>${inputNomeAtividade}</td>`
        linha += `<td>${inputNotaAtividade}</td>`
        linha += `<td>${inputNotaAtividade >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        
        linhas += linha
    }

    
    document.querySelector('#nota-atividade').value = ''
    document.querySelector('#nome-atividade').value = ''
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}


function calculaMediaFinal(){
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}

