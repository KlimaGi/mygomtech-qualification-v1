import { FC } from "react";
import { Routes } from "../../../../constants";
import { IItem } from "../../../../services/getUserItems";
import FilterTab from "./components/FilterTab";
import itemIsOlder from "../../../../utils/itemIsOlder";
import itemHasReusedEmail from "../../../../utils/itemHasReusedEmail";
import itemHasWrongEmail from "../../../../utils/itemHasWrongEmail";

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const weakItemsCount = items.reduce((count, item) => count + 1, 0);
  const reusedItemsCount = items.filter((item) =>
    itemHasReusedEmail(item, items)
  ).length;
  const olderItemsCount = itemIsOlder(items).length;
  const wrongItemsCount = itemHasWrongEmail(items).length;
  return (
    <div className="filter">
      <FilterTab title="all" count={items.length} path={Routes.Users} />
      <FilterTab title="Weak" count={weakItemsCount} path={Routes.Weak} />
      <FilterTab title="Wrong" count={wrongItemsCount} path={Routes.Wrong} />
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title="Old" count={olderItemsCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
