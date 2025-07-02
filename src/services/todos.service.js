const { readDb, writeDb } = require("../utils/files.util");

const RESOURCE = "todos";

const getAllTodos = async () => {
  const todos = await readDb(RESOURCE);
  return todos;
};

const getTodoById = async (id) => {
  const todos = await readDb(RESOURCE);
  const todo = todos.find((item) => item.id === id);
  return todo;
};

const createTodo = async (data) => {
  const todos = await readDb(RESOURCE);
  const newTodo = {
    id: (todos[todos.length - 1]?.id ?? 0) + 1,
    title: data.title,
    content: data.content,
  };
  const newTodos = [...todos, newTodo];

  await writeDb(RESOURCE, newTodos);

  return newTodo;
};

const updateTodo = async (id, data) => {
  const todos = await readDb(RESOURCE);
  const todoIndex = todos.findIndex((item) => item.id === id);
  if (todoIndex === -1) return null;

  const updatedTodo = { ...todos[todoIndex], ...data };
  const updatedTodos = [
    ...todos.slice(0, todoIndex),
    updatedTodo,
    ...todos.slice(todoIndex + 1),
  ];
  await writeDb(RESOURCE, updatedTodos);

  return updatedTodo;
};

const deleteTodo = async (id) => {
  const todos = await readDb(RESOURCE);
  const index = todos.findIndex((item) => item.id === id);

  if (index !== -1) {
    const newTodos = todos.filter((item) => item.id !== id);
    await writeDb(RESOURCE, newTodos);
  }

  return index >= 0;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
