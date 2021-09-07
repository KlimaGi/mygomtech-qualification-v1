import { FC, useState } from "react";
import { IItem } from "../../../../services/getUserItems";
import ItemIcon from "./components/ItemIcon";
import UpdateModal from "./components/UpdateModal";

interface IList {
  items: Array<IItem>;
}

const List: FC<IList> = ({ items }) => {
  const [newEmail, setNewEmail] = useState<string>("");
  const updateEmail = (email: string): void => {
    setNewEmail(email);
  };

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li className="item" key={index} data-testid="item-name">
          <ItemIcon name={item.name} />
          <div>
            <div className="title">{item.name}</div>
            <div className="description">
              {newEmail ? newEmail : item.email}
            </div>
          </div>
          <UpdateModal item={item} updateEmail={updateEmail} />
        </li>
      ))}
    </ul>
  );
};

export default List;
