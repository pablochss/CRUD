function enviarDados() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const rua = document.getElementById("rua").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const telefone = document.getElementById("telefone").value;


    fetch('http://localhost:3000/pessoas', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha: senha, rua: rua, cep: cep, cidade: cidade, estado: estado, telefone: telefone})
    })
    .then(response => response.json())
  }