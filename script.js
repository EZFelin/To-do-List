function criarTarefa(texto) {
    
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.5";
        } else {
            li.style.textDecoration = 'none';
            li.style.opacity = '1';
        }
    });

    const span = document.createElement('span');
    span.textContent = texto;

    li.appendChild(checkbox);
    li.appendChild(span);

    document.querySelector('#todo-list').appendChild(li);

    checkEmptyList();

    li.classList.add('todo-item');

    const botaoExcluir = document.createElement('button');

    botaoExcluir.textContent = 'Excluir';

    botaoExcluir.addEventListener('click', () => {
        tarefas = tarefas.filter(tarefa => tarefa !== span.textContent);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));

        li.remove();
        checkEmptyList();
    });

    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';

    li.appendChild(botaoExcluir);
}
const todoList = document.querySelector('#todo-list');
const emptyListMessage = document.querySelector('.empty-list');
let tarefas = [];
const tarefasSalvas = localStorage.getItem('tarefas');
if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas);
    tarefas.forEach(tarefa => {
        criarTarefa(tarefa);
    });
}
const botao = document.querySelector('#todo-button');
botao.addEventListener("click", (event) => {
    event.preventDefault();

    const input = document.querySelector('#todo-input');

    if (input.value === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }
    criarTarefa(input.value);
    tarefas.push(input.value);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    input.value = '';
});

function checkEmptyList() {
    if (todoList.children.length === 0) {
        emptyListMessage.style.display = 'block';
    } else {
        emptyListMessage.style.display = 'none';
    }
}

checkEmptyList();

