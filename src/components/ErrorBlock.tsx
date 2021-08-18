import { FC, memo } from "react";

interface IErrorBlock {
  error: String;
}

const ErrorBlock: FC<IErrorBlock> = ({ error }) => {
  if (!error) {
    return null;
  }

  return;
  <div>
    <p>{error}</p>
  </div>;
};

export default memo(ErrorBlock);
