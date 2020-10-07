const yargs = require("yargs");
const controller = require("./controller");

yargs.command({
  command: "list",
  describe: "show todo list",
  handler: function () {
    let data = controller.loadData();
    console.log(data);
  },
});

yargs.command({
  command: "create",
  describe: "create new todo",
  builder: {
    todo: {
      type: "String",
      demandOption: true,
      describe: "thing todo",
    },
    status: {
      type: "boolean",
      demandOption: true,
      describe: "complete or not",
      default: false,
    },
  },
  handler: function (arg) {
    let data = controller.createTodo(arg.todo, arg.status);
  },
});

yargs.command({
  command: "delete",
  describe: "delete id",
  builder: {
    id: {
      type: "Number",
      demandOption: true,
      describe: "task id",
    },
  },
  handler: function (arg) {
    let data = controller.deleteTodo(arg.id);
  },
});

yargs.command({
  command: "toggle",
  describe: "change status",
  builder: {
    id: {
      type: "Number",
      demandOption: true,
      describe: "task id",
    },
  },
  handler: function (arg) {
    let data = controller.toggleTask(arg.id);
  },
});

yargs.command({
  command: "completed",
  describe: "show completed",
  handler: function () {
    let data = controller.showComplete();
  },
});

yargs.command({
  command: "pending",
  describe: "show pending",
  handler: function () {
    let data = controller.showPending();
  },
});

yargs.command({
  command: "delete-all",
  describe: "delete all",
  handler: function () {
    let data = controller.deleteAll();
  },
});

yargs.command({
  command: "delete-complete",
  describe: "delete all complete",
  handler: function () {
    let data = controller.deleteCompleted();
  },
});

yargs.parse();

//1. make the command of create todo
//2. get the data from data.json
//3. add 1 more item
