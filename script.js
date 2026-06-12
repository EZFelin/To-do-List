function criarTarefa(tarefa) {
    
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if (tarefa.concluida) {
        checkbox.checked = true;
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.5";
    }
     

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.5";
            tarefa.concluida = true;
        } else {
            li.style.textDecoration = 'none';
            li.style.opacity = '1';
            tarefa.concluida = false;
        }
        localStorage.setItem(
        'tarefas',
        JSON.stringify(tarefas)
    );
    });

    const span = document.createElement('span');
    span.textContent = tarefa.texto;

    li.appendChild(checkbox);
    li.appendChild(span);

    document.querySelector('#todo-list').appendChild(li);

    checkEmptyList();

    li.classList.add('todo-item');

    const botaoExcluir = document.createElement('button');

    botaoExcluir.textContent = 'Excluir';

    botaoExcluir.addEventListener('click', () => {
        tarefas = tarefas.filter(tarefa => tarefa.texto !== span.textContent
);
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
    const tarefa = {
        texto: input.value,
        concluida: false
    };

    if (input.value === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }
    criarTarefa(tarefa);
    tarefas.push(tarefa);
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

