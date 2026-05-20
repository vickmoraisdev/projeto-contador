res.innerHTML = 'Preparando contagem...'

function resultado(){
    let txtinicio = document.getElementById('txtinicio')
    let txtfim = document.getElementById('txtfim')
    let txtpasso = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    let inicio = Number(txtinicio.value)
    let fim = Number(txtfim.value)
    let passo = Number(txtpasso.value)

    res.innerHTML = ''
    if (txtinicio.value == '' || txtfim.value == ''|| txtpasso.value == ''){
        window.alert('[ERRO] Não pode deixar caixa vazia!')
        res.innerHTML = 'Impossível contar!'
        return
    }
    if (passo <= 0){
        window.alert('[ERRO] Impossível pular de 0 em 0!')
        res.innerHTML = 'Impossível contar!'
        return
    }

    res.innerHTML = '<p>Contando:</p>'
    if (inicio < fim){ //contagem crescente
        for(inicio; inicio <= fim; inicio += passo){
            res.innerHTML += `<strong>${inicio} \u{1F449} </strong>`
        }
    } else{ //contagem decrescente
        for(inicio; inicio >= fim; inicio -= passo){
            res.innerHTML += `<strong>${inicio} \u{1F449} </strong>`
        }
    } res.innerHTML += `\u{1F3C1}`

}