import { createContext, useContext } from "react";

export type GLobalContent = {
  copy: string;
  setCopy: (c: string) => void;
};

export const myGlobalContext = createContext<GLobalContent>({
  copy: "Hello world",
  setCopy: () => {},
});

export const useGlobalContext = () => useContext(myGlobalContext);
