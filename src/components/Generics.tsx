import { Dispatch, SetStateAction } from "react";

type U = string | number;

// type PropsType = {
//   label: string;
//   value: U;
//   setFun: () => Dispatch<SetStateAction<U>>;
// };

const Generics = <T extends U>({
  label,
  value,
  setFun,
}: {
  label: string;
  value: T;
  setFun: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <div>
      <form>
        <label htmlFor="name">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setFun(e.target.value as T)}
        />
        <button type="submit">Submit</button>
        <p>value is: {value} </p>
      </form>
    </div>
  );
};

export default Generics;
