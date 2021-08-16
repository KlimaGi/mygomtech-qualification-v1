import { FC, SyntheticEvent } from "react";
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import logout from "../../../../services/logout";
import { useHistory } from "react-router";

import "./header-style.scss";

interface IHeader {
  items: Array<IItem>;
  username: string;
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { push } = useHistory();
  const handleClick = async (event: SyntheticEvent<HTMLButtonElement>) => {
    await logout();
    push(Routes.Login);
  };

  return (
    <div className="header">
      <div className="user-section">
        <button onClick={handleClick}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${items.length} Emails are wrong`}</h1>
      <span>
        Email validator to protect your company from bad registrations
      </span>
    </div>
  );
};

export default Header;
