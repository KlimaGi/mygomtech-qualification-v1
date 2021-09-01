import { FC, SyntheticEvent } from "react";
import { useHistory } from "react-router";
import { Routes } from "../../../../constants";
import { IItem } from "../../../../services/getUserItems";
import itemHasWrongEmail from "../../../../utils/itemHasWrongEmail";
import logout from "../../../../services/logout";

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const history = useHistory();
  const handleClick = async (event: SyntheticEvent<HTMLButtonElement>) => {
    await logout();
    history.push(Routes.Login);
  };
  const wrongItemsCount = itemHasWrongEmail(items).length;
  return (
    <div className="header">
      <div className="user-section">
        <button onClick={handleClick}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${wrongItemsCount} Emails are wrong`}</h1>
      <span>
        Email validator to protect your company from bad registrations
      </span>
    </div>
  );
};

export default Header;
