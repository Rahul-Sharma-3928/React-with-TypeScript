import { ReactNode } from "react";

type PropsType = {
  heading: string;
  count: number;
  getFun: () => void;
  children?: ReactNode;
};
const Box = ({ heading, count, getFun}: PropsType) => {
  getFun();
  return (
    <div>
      <h3>Hey, {heading} </h3>
      <h4>{count} </h4>
    </div>
  );
};

export default Box;
