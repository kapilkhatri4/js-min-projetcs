const createTask = document.querySelector('#write');
const addBtn = document.querySelector('#submit');
const listBlock = document.querySelector('.todo__list');
const clearBtn = document.querySelector('.clear-btn');

function addTask(e) {
  const tododiv = document.createElement('div');
  const createList = document.createElement('li');
  const deleteBtn = document.createElement('a');
  const completeBtn = document.createElement('a');

  e.preventDefault();
  const getTask = createTask.value;
  if (getTask === '') return;
  createList.classList.add('createli');
  createList.innerText = getTask;
  tododiv.appendChild(createList);

  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deleteBtn.style.float = 'right';
  createList.appendChild(deleteBtn);

  completeBtn.classList.add('complete-btn');
  completeBtn.style.float = 'right';
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
  createList.appendChild(completeBtn);

  listBlock.appendChild(tododiv);
  createTask.value = '';
}
addBtn.addEventListener('click', addTask);

// remove todo item
function removeItem(e) {
  if (e.target.classList.contains('delete-btn')) {
    const del = e.target.parentElement;
    del.classList.add('remove');
    del.addEventListener('transitionend', function () {
      del.parentElement.remove();
    });
  }
}
listBlock.addEventListener('click', removeItem);

//complete task
function completeTask(el) {
  if (el.target.classList.contains('complete-btn')) {
    const doneWrap = el.target.parentElement;
    doneWrap.classList.toggle('comp-task');
  }
}
listBlock.addEventListener('click', completeTask);

// clear all tasks
function clearTasks() {
  while (listBlock.firstChild) {
    listBlock.removeChild(listBlock.firstChild);
  }
}
clearBtn.addEventListener('click', clearTasks);
