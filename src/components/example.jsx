import React from "react";
import useModel from "../hooks/useModel";

class Model {
  count;
  add() {
    this.count++;
  }
  constructor() {
    this.count = 0;
  }
}

export const Example = () => {
  const model = useModel(new Model());

  return (
    <div>
      <div>Count: {model.count}</div>
      <button onClick={() => model.add()}>Add 1</button>
    </div>
  );
};
