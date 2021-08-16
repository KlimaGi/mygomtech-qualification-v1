import { FC } from "react";
import { Routes } from "~/constants";
import { IItem } from "~/services/getUserItems";
import FilterTab from "./components/FilterTab";
import itemIsOlder from "~/utils/itemIsOlder";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemHasWrongEmail from "~/utils/itemHasWrongEmail";

import "./filter-style.scss";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const wrongItemsCount = itemHasWrongEmail(items).length;
  const reusedItemsCount = items.filter((item) =>
    itemHasReusedPassword(item, items)
  ).length;
  const olderItemsCount = itemIsOlder(items).length;
  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users} />
      <FilterTab title="Wrong" count={wrongItemsCount} path={Routes.Weak} />
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title="Old" count={olderItemsCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
