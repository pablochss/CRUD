function fazerLogin(){
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    //Fazer uma requisição GET - READ e busca a pessoa 
    fetch('http://localhost:3000/pessoas').then(resposta => resposta.json())
    .then(data => {
        var pessoa = data.find(pessoas => pessoas.email === email && pessoas.senha === senha)
        if(pessoa){
            window.location.href = './bemvindo.html'
        }else{
            alert("E-mail ou Senha incorreto(a)! Tente novamente")
        }
    })
}