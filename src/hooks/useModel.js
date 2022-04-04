import { useState } from "react";

export default function useModel(initialState) {
  var model = {};
  var keys = Object.keys(initialState);
  var [getState, setState] = useState(initialState);
  var propertyNames = Object.getOwnPropertyNames(
    Object.getPrototypeOf(initialState)
  );

  const clone = (oldState) => {
    const newState = Object.assign(
      Object.create(Object.getPrototypeOf(oldState)),
      oldState
    );
    return newState;
  };

  keys &&
    keys.forEach((key) => {
      Object.defineProperty(model, key, {
        get: function () {
          return getState[key];
        },
        set: function (value) {
          setState((state) => {
            const newState = clone(state);
            newState[key] = value;
            return newState;
          });
        },
      });
    });

  propertyNames &&
    propertyNames
      .filter((propertyName) => !(propertyName === "constructor"))
      .forEach((propertyName) => {
        if (typeof initialState[propertyName] === "function") {
          //console.log(propertyName, typeof initialState[propertyName])
          model[propertyName] = function (args) {
            const newState = clone(getState);
            newState[propertyName] && newState[propertyName](args);
            setState(newState);
          };
        } else {
          //normal getters and setters
          Object.defineProperty(model, propertyName, {
            get: function () {
              return getState[propertyName];
            },
            set: function (value) {
              setState((state) => {
                const newState = clone(state);
                newState[propertyName] = value;
                return newState;
              });
            },
          });
        }
      });

  return model;
}
