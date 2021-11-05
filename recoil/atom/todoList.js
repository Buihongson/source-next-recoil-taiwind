import { atom } from "recoil";

export const todoListState = atom({
  key: "todoList",
  default: [
    { title: "Thức dậy" },
    { title: "Đánh răng" },
    { title: "Ăn sáng" },
    { title: "Đi làm" },
  ],
});
