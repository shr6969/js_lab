// CSS-класи для посилання на елементи стилю
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

// Отримання елементів HTML для списку, лічильників загальної кількості та невідмічених TODO
const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

// Функція для додавання нового TODO
function newTodo() {
  // Створення нових елементів для TODO
  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  // Створення чекбоксу для відмічання виконаних TODO
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateUncheckedCount); // Додавання події для оновлення лічильника невідмічених TODO

  // Створення текстового поля для TODO з текстом, введеним користувачем
  const todoText = document.createElement('span');
  todoText.className = classNames.TODO_TEXT;
  todoText.textContent = prompt("Введіть завдання:"); // Введення тексту TODO користувачем

  // Створення кнопки для видалення TODO
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Видалити';
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.addEventListener('click', () => {
    todoItem.remove(); // Видалення TODO зі списку
    updateCounts(-1, checkbox.checked ? 0 : -1); // Оновлення лічильників
  });

  // Додавання елементів до TODO і самого TODO до списку
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  list.appendChild(todoItem);

  // Оновлення лічильників
  updateCounts(1, 1);
}

// Функція для оновлення лічильників загальної кількості і невідмічених TODO
function updateCounts(itemDelta, uncheckedDelta) {
  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) + itemDelta;
  uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) + uncheckedDelta;
}

// Функція для оновлення лічильника невідмічених TODO при зміні стану чекбокса
function updateUncheckedCount(event) {
  const delta = event.target.checked ? -1 : 1;
  updateCounts(0, delta);
}
