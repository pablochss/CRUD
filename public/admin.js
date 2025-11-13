fetch('http://localhost:3000/pessoas')
	.then(response => response.json())
	.then(data => {
		const tabelaCorpo = document.getElementById('tabela-corpo');
		
		data.forEach(obj => {
			const tr = document.createElement('tr');
			const tdId = document.createElement('td');
			const tdNome = document.createElement('td');
			const tdSobrenome = document.createElement('td');
			const tdCPF = document.createElement('td');
			const tdEmail = document.createElement('td');
			const tdSenha = document.createElement('td');
			const tdRua = document.createElement('td');
			const tdCEP = document.createElement('td');
			const tdCidade = document.createElement('td');
			const tdEstado = document.createElement('td');
			const tdTelefone = document.createElement('td');
			
			// Preenche as células da linha com as informações desejadas
			tdId.innerText = obj.id;
			tdNome.innerText = obj.nome;
			tdSobrenome.innerText = obj.sobrenome;
			tdCPF.innerText = obj.cpf;
			tdEmail.innerText = obj.email;
			tdSenha.innerText = obj.senha;
			tdRua.innerText = obj.rua;
			tdCEP.innerText = obj.cep;
			tdCidade.innerText = obj.cidade;
			tdEstado.innerText = obj.estado;
			tdTelefone.innerText = obj.telefone;
			
            //Metodo que adiciona a nova linha como um elemento filho do corpo da tabela
			tr.appendChild(tdId);
			tr.appendChild(tdNome);
			tr.appendChild(tdSobrenome);
			tr.appendChild(tdCPF);
			tr.appendChild(tdEmail);
			tr.appendChild(tdSenha);
			tr.appendChild(tdRua);
			tr.appendChild(tdCEP);
			tr.appendChild(tdCidade);
			tr.appendChild(tdEstado);
			tr.appendChild(tdTelefone);
			tabelaCorpo.appendChild(tr);
		});
	})

function buscarDados() {
const cpf = document.getElementById('cpfBuscar').value;
fetch(`http://localhost:3000/pessoas`, {
method: 'GET'
})
            .then(response => response.json())
            .then(data => {
                const pessoaEncontrada = data.find(pessoas => pessoas.cpf === cpf);
                
                console.log(data)
                if (pessoaEncontrada) {
                    document.getElementById('nomeBuscar').value = pessoaEncontrada.nome;
                    document.getElementById('sobrenomeBuscar').value = pessoaEncontrada.sobrenome;
                    document.getElementById('cpfBuscar').value = pessoaEncontrada.cpf;
                } else {
                    alert('Pessoa não encontrada!');
                }
            })
}

function atualizarDados() {
                const id = document.getElementById('id').value;
                const nome = document.getElementById('nomeAtualizar').value;
                const sobrenome = document.getElementById('sobrenomeAtualizar').value;
                const cpf = document.getElementById('cpfAtualizar').value;
                const email = document.getElementById('emailAtualizar').value;
                const senha = document.getElementById('senhaAtualizar').value;
                const rua = document.getElementById('ruaAtualizar').value;
                const cep = document.getElementById('cepAtualizar').value;
                const cidade = document.getElementById('cidadeAtualizar').value;
                const estado = document.getElementById('estadoAtualizar').value;
                const telefone = document.getElementById('telefoneAtualizar').value;

                fetch(`http://localhost:3000/pessoas/${id}`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({ nome: nome, sobrenome: sobrenome, cpf: cpf, email: email, senha: senha, rua: rua, cep: cep, cidade: cidade, estado: estado, telefone: telefone })
                })
                .then(response => response.json())
                .then(data => {
                    // limpa os inputs do formulário
                    document.getElementById('id').value = '';
                    document.getElementById('nomeAtualizar').value = '';
                    document.getElementById('sobrenomeAtualizar').value = '';
                    document.getElementById('cpfAtualizar').value = '';
                    document.getElementById('emailAtualizar').value = '';
                    document.getElementById('senhaAtualizar').value = '';
                    document.getElementById('ruaAtualizar').value = '';
                    document.getElementById('cepAtualizar').value = '';
                    document.getElementById('cidadeAtualizar').value = '';
                    document.getElementById('estadoAtualizar').value = '';
                    document.getElementById('telefoneAtualizar').value = '';
                });
                
            }


function deletarDados() {
    var cpf = document.getElementById('identificadorCPF').value

    fetch('http://localhost:3000/pessoas')
        .then(response => response.json())
        .then(data => {
            
            const pessoa = data.find(pessoa => pessoa.cpf === cpf)

            if (pessoa) {
                
                fetch(`http://localhost:3000/pessoas/${pessoa.id}`, {
                    method: 'DELETE'
                })
                .then(() => alert('Pessoa deletada com sucesso!'))
            } else {
                alert('CPF não encontrado!')
            }
        })
}
