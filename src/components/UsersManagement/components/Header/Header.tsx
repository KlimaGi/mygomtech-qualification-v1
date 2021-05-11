import { FC } from "react";
import { IItem } from "~/services/getUserItems";
import logout from "../../../../services/logout";
import { Routes } from "~/constants";
import { useHistory } from "react-router-dom";

import "./header-style.scss";

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { push } = useHistory();

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={() => {logout();push(Routes.Login);}}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${items.length} Emails are wrong`}</h1>
      <span>
        Email validator to protect your company from bad registrations
      </span>
    </div>
  );
};

export default Header;
