import { IItem } from "~/services/getUserItems";

const itemIsOlder = (itemList: Array<IItem>) => {
  const today = new Date().getTime();
  const oldItems = itemList.filter(
    (item) => today - Date.parse(item.createdAt) >= 30 * 24 * 3600 * 1000
  );
  return oldItems;
};

export default itemIsOlder;
