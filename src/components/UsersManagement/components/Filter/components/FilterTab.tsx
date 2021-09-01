import { FC } from "react";
import { useHistory } from "react-router-dom";

interface IFilterTab {
  title: string;
  count: number;
  path: string;
}

const FilterTab: FC<IFilterTab> = ({ title, count, path }) => {
  const history = useHistory();

  return (
    <div className="filter-tab" onClick={() => history.push(path)}>
      {`${title} (${count})`}
    </div>
  );
};

export default FilterTab;
