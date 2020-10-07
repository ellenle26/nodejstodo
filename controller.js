const fs = require("fs");

const saveData = (list) => {
  const listJSON = JSON.stringify(list);
  fs.writeFileSync("data.json", listJSON);
};

const loadData = () => {
  let todoList = fs.readFileSync("data.json").toString();
  todoList = JSON.parse(todoList);
  return todoList;
};

const createTodo = (todo, status) => {
  const todoList = loadData();
  // let id = 1;
  // if (todoList.length > 0) id = todoList[length - 1].id + 1;

  todoList.push({
    todo: todo,
    status: status,
    id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
  });
  saveData(todoList);
  console.log(todoList);
};

const deleteTodo = (deleteId) => {
  const todoList = loadData();
  let deleteItemId = todoList.findIndex((task) => task.id === deleteId);
  todoList.splice(deleteItemId, 1);
  saveData(todoList);
  console.log(todoList);
};

const toggleTask = (statusId) => {
  const todoList = loadData();
  let itemStatus = todoList.find((task) => task.id === statusId);
  itemStatus.status = !itemStatus.status;
  let itemChangeIndex = todoList.findIndex((task) => task.id === statusId);
  todoList[itemChangeIndex].status = itemStatus.status;
  saveData(todoList);
  console.log(todoList);
};

const showComplete = () => {
  let todoList = loadData();
  let completeList = todoList.filter((task) => task.status == true);
  console.log(completeList);
};

const showPending = () => {
  let todoList = loadData();
  let pendingList = todoList.filter((task) => task.status == false);
  console.log(pendingList);
};

const deleteAll = () => {
  let todoList = [];
  saveData(todoList);
  console.log(todoList);
};

const deleteCompleted = () => {
  let todoList = loadData();
  let remainingList = todoList.filter((task) => task.status == false);
  saveData(remainingList);
  console.log(remainingList);
};

module.exports = {
  loadData,
  createTodo,
  deleteTodo,
  toggleTask,
  showComplete,
  showPending,
  deleteAll,
  deleteCompleted,
};
