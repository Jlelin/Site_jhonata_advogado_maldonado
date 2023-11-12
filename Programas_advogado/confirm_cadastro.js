// Função para exibir o modal do Cliente
function showModalCliente() {
    var modalCliente = document.getElementById("modal-cliente");
    modalCliente.style.display = "block";
}

// Função para fechar o modal do Cliente
function closeModalCliente() {
    var modalCliente = document.getElementById("modal-cliente");
    modalCliente.style.display = "none";
}

// Função para exibir o modal do Funcionário
function showModalFuncionario() {
    var modalFuncionario = document.getElementById("modal-funcionario");
    modalFuncionario.style.display = "block";
}

// Função para fechar o modal do Funcionário
function closeModalFuncionario() {
    var modalFuncionario = document.getElementById("modal-funcionario");
    modalFuncionario.style.display = "none";
}

// Adiciona event listeners para os botões Cliente e Funcionário
document.getElementById("btn-cliente").addEventListener("click", showModalCliente);
document.getElementById("btn-funcionario").addEventListener("click", showModalFuncionario);

// Adiciona event listeners para os botões de fechar nos modais
document.getElementsByClassName("close")[0].addEventListener("click", closeModalCliente);
document.getElementsByClassName("close")[1].addEventListener("click", closeModalFuncionario);

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    var modalCliente = document.getElementById("modal-cliente");
    var modalFuncionario = document.getElementById("modal-funcionario");

    if (event.target == modalCliente) {
        modalCliente.style.display = "none";
    }

    if (event.target == modalFuncionario) {
        modalFuncionario.style.display = "none";
    }
}

// Oculta os modais ao carregar a página
window.onload = function() {
    closeModalCliente();
    closeModalFuncionario();
}
