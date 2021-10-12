function Verificar(){
    let data= new Date()
    let ano = data.getFullYear()
    let fidade = document.querySelector('txt')
    let res = document.querySelector('resp')

    if(fidade.value.length =1 || Number (fidade.value <=10)){
        res.innerHTML='criança'
    }else{
        
    }
