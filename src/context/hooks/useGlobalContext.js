import { useContext } from "react";
import { GlobalContext } from "../GlobalContextProvider";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return { ...context };
};

export default useGlobalContext;
