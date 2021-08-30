import { employees } from "../data";

let items = [];

export const updateItem = (item) => {
  console.log("item ", item);
  items.push(item);
};

export const getItems = () => {
  return employees.map((userItem) => {
    const updatedItem = items.find(({ id }) => id === userItem.id);

    return {
      ...(updatedItem || userItem),
    };
  });
};
