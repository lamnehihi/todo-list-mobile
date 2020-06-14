import React from "react";
import ModalAdd from "../components/ModalAdd";

export default {
  title: "Modal",
  component: ModalAdd,
};

export const AddNewItem = () => (
  <ModalAdd value="Go to gym"></ModalAdd>
);

// export const Emoji = () => (
//   <Button onClick={action("clicked")}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
