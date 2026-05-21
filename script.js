const botao = document.querySelector('#todo-button');
botao.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector('#todo-input');
    console.log(input.value);
    if (input.value === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }
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
    span.textContent = input.value;
    li.appendChild(checkbox);
    li.appendChild(span);
    document.querySelector('#todo-list').appendChild(li);
    input.value = '';
    li.classList.add('todo-item');
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
        li.remove();
    });
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(botaoExcluir);
});
