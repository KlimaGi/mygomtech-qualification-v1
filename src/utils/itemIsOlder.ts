import { IItem } from "~/services/getUserItems";

const itemIsOlder = (itemList: Array<IItem>) => {
  const today = Number(new Date().toISOString().slice(5, 7));
  const oldItems = itemList.filter(
    (item) => today - Number(item.createdAt.slice(5, 7)) >= 1
  );
  return oldItems;
};

export default itemIsOlder;
