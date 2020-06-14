import React from "react";
import TodoItem from "../components/TodoItem";

export default {
  title: "TodoItem",
  component: TodoItem,
};

export const TodoItemOriginal = () => (
  <TodoItem item={{title: "Go to school"}} index={0} onClick></TodoItem>
);

// export const Emoji = () => (
//   <Button onClick={action("clicked")}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
