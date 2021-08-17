import { employees } from "../data";

let items = [];

export const updateItem = (item) => {
  console.log("item ", item);
  items.push(item);
};

export const getItems = () => {
  return employees.map((userItem) => {
    const updatedItem = items.find(({ id }) => id === userItem.id);

    console.log("updatedItem ", updatedItem);
    console.log("userItem ", userItem);

    return {
      ...(updatedItem || userItem),
    };
  });
};
