import { FC, useState } from "react";
import { IItem } from "../../../../services/getUserItems";
import ItemIcon from "./components/ItemIcon";
import updateItem from "../../../../services/updateItem";
import Modal from "react-modal";

interface IList {
  items: Array<IItem>;
}

interface IUpdateModal {
  item: IItem;
  updateEmail: (arg: string) => void;
}

const UpdateModal: FC<IUpdateModal> = ({ item, updateEmail }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState(item.email);

  return (
    <>
      <button className="update" onClick={() => setShowModal(true)}>
        Update Email
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1 className="h1-modal">Update Email</h1>
        <input
          placeholder="new email"
          className="input input-modal px-8px"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <div className="pt-16px pb-16px text-center">
          <button
            className="button"
            onClick={async () => {
              await updateItem({
                ...item,
                email: newEmail,
              });
              setShowModal(false);
              updateEmail(newEmail);
            }}
          >
            Change
          </button>
          <button
            className="button ml-12px"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

const List: FC<IList> = ({ items }) => {
  const [newEmail, setNewEmail] = useState<string>("");
  const updateEmail = (email: string): void => {
    setNewEmail(email);
  };

  return (
    <ul className="list">
      {items.map((item) => (
        <li className="item">
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
