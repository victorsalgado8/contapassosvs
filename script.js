function contar() {
    var numini = Number(document.getElementById('txtini').value)
    var numfim = Number(document.getElementById('txtfim').value)
    var numpass = Number(document.getElementById('txtpass').value)
    var res = document.querySelector('div#res')
    var p = document.createElement('p')
    if (numini.valueOf.length == 0 || numfim.valueOf.length == 0 || numpass.valueOf.length == 0) {
        res.innerHTML = 'impossível contar'
    }else if (numpass == 0) {
        window.alert('Passo iválido! Considerando PASSO 1')
        numpass = 1
    }
        res.innerHTML = 'contando:'
    if (numini < numfim){
        for (numini; numini <= numfim; numini += numpass) {
            p.innerHTML += numini + "&#128073;"        
            console.log(numini) 
        } 
        p.innerHTML+='&#127937;'
        res.appendChild(p)
    } else{
        for(numini; numini >= numfim; numini -= numpass){
            p.innerHTML += numini + "&#128073;"        
        }
        p.innerHTML+='&#127937;'
        res.appendChild(p)
    }
}
