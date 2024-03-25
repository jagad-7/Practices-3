import React, { createContext } from "react";
import HomeContext from "./HomeContext";

export const context = createContext();

export default function MainContext() {

  let p = {
    name: 'Samsung',
    price: 40000

  }
  return (
    <context.Provider value={p}>
        <HomeContext />
    </context.Provider>
  );
}
