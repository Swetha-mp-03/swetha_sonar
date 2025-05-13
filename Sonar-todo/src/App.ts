import React, { useState } from "react";

export const App = () => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return React.createElement(
    "div",
    {
      style: {
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
    React.createElement(
      "h1",
      { style: { textAlign: "center", color: "#333", marginBottom: "1.5rem" } },
      "Todo List"
    ),
    React.createElement(
      "div",
      { style: { marginBottom: "1.5rem", display: "flex", gap: "0.5rem" } },
      React.createElement("input", {
        type: "text",
        value: text,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value),
        placeholder: "Enter a task",
        style: {
          flex: "1",
          padding: "0.8rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "1rem",
        },
      }),
      React.createElement(
        "button",
        {
          onClick: addTodo,
          style: {
            padding: "0.8rem",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          },
          onMouseOver: (e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3"),
          onMouseOut: (e) =>
            (e.currentTarget.style.backgroundColor = "#007BFF"),
        },
        "Add"
      )
    ),
    React.createElement(
      "ul",
      { style: { listStyleType: "none", padding: "0" } },
      todos.map((todo) =>
        React.createElement(
          "li",
          {
            key: todo.id,
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.8rem",
              marginBottom: "0.5rem",
              backgroundColor: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            },
          },
          React.createElement(
            "span",
            { style: { fontSize: "1rem", color: "#555" } },
            todo.text
          ),
          React.createElement(
            "button",
            {
              onClick: () => deleteTodo(todo.id),
              style: {
                padding: "0.5rem",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "0.9rem",
                transition: "background-color 0.3s ease",
              },
              onMouseOver: (e) =>
                (e.currentTarget.style.backgroundColor = "#cc0000"),
              onMouseOut: (e) =>
                (e.currentTarget.style.backgroundColor = "red"),
            },
            "Delete"
          )
        )
      )
    )
  );
};
