import { IItem } from "~/services/getUserItems";

const itemHasWrongEmail = (itemList: Array<IItem>) => {
  const correctEmail =
    /^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]?)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const wrongItems = itemList.filter((item) => !item.email.match(correctEmail));
  return wrongItems;
};

export default itemHasWrongEmail;
