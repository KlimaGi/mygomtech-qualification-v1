import { API } from "../constants";
import getUrl from "../utils/getUrl";

export enum Roles {
  read = "read",
  write = "write",
  amin = "amin",
}

export interface IItem {
  name: string;
  role: Roles;
  email: string;
  createdAt: string;
}

const getUserItems = async () => {
  const url = getUrl(API.Items);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await response.json();
  console.log("data.items ", data.items);
  return data.items;
};

export default getUserItems;
