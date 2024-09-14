import { FormEvent, useState } from "react";

interface Person {
  name: string;
  age: number;
}

const allCss = {
  formCss: {
    backgroundColor: "red",
    padding: "15px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-between",
  },

  inputPadding: {
    padding: "8px",
  },
};

const Other = () => {
  const [user, setUser] = useState<Person>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={submitHandler} style={allCss.formCss}>
        <input
          style={allCss.inputPadding}
          type="text"
          placeholder="enter your name here.."
          value={user?.name || ""}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev!, name: e.target.value };
            });
          }}
        />
        <input
          style={allCss.inputPadding}
          type="number"
          placeholder="enter your age here..."
          value={user?.age || ""}
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev!, age: Number(e.target.value) };
            })
          }
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Other;
