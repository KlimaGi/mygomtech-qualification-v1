import { FC, memo } from "react";

interface IErrorBlock {
  error: String;
}

const ErrorBlock: FC<IErrorBlock> = ({ error }) => {
  if (!error) {
    return null;
  }

  return <div className="error-style">{error}</div>;
};

export default memo(ErrorBlock);
