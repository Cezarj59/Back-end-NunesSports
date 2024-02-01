// Fazer uma requisição GET para a API
fetch('http://localhost:3001/products/listar')
    .then(response => response.json())
    .then(data => {
        // Manipular o DOM para exibir os dados
        data.forEach(product => {
            const row = document.createElement('tr');
            row.id = `productRow_${product._id}`; // Adicionar um ID único à linha

            row.innerHTML = `
             <td>${product.nome}</td>
             <td>${product.codigo}</td>
             <td>${product.descricao}</td>
             <td>${product.preco}</td>
             <td><button class="btn btn-outline-warning btn-sm col-12" onclick="abrirFormularioEdicao('${product._id}')">Editar</button></td>
             <td><button class="btn btn-outline-danger btn-sm col-12" onclick="excluirProduto('${product._id}')">Excluir</button></td>
         `;
            productList.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Erro ao obter dados da API:', error);
    });



function excluirProduto(productId) {
    // Fazer uma requisição DELETE para a API
    fetch(`http://localhost:3001/products/deletar/${productId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Retornar a resposta da API como JSON
            } else {
                throw new Error(`Erro ao excluir produto: ${response.statusText}`);
            }
        })
        .then(data => {
            // Exibir a mensagem da API em um alerta
            alert(data.message);

            // Atualizar a interface removendo o produto excluído
            const rowToDelete = document.getElementById(`productRow_${productId}`);
            if (rowToDelete) {
                rowToDelete.remove();
            }
        })
        .catch(error => {
            console.error(error.message);
        });
}




function abrirFormularioEdicao(productId) {
    // Fazer uma requisição GET para a API para obter os detalhes do produto
   
    fetch(`http://localhost:3001/products/buscar/${productId}`)
        .then(response => response.json())
        .then(product => {
            // Preencher o modal com os detalhes do produto
            document.getElementById('edit-nome').value = product.nome;
            document.getElementById('edit-codigo').value = product.codigo;
            document.getElementById('edit-descricao').value = product.descricao;
            document.getElementById('edit-preco').value = product.preco;

            // Abra o modal de edição
            var editModal = new bootstrap.Modal(document.getElementById('editModal'));
            editModal.show();
        })
        .catch(error => {
            console.error('Erro ao obter detalhes do produto:', error);
        });
}