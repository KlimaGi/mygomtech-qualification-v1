import { FC, useState } from "react";
import { IItem } from "../../../../../services/getUserItems";
import updateItem from "../../../../../services/updateItem";
import Modal from "react-modal";

interface IUpdateModal {
  item: IItem;
  updateEmail: (arg: string, arg1: string) => void;
}

const UpdateModal: FC<IUpdateModal> = ({ item, updateEmail }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState(item.email);
  const name = item.name;

  return (
    <>
      <button
        className="update"
        data-testid="show-modal"
        onClick={() => setShowModal(true)}
      >
        Update Email
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
        appElement={document.getElementById("app")}
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
              updateEmail(newEmail, name);
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

export default UpdateModal;
