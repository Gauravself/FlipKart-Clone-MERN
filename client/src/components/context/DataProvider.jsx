import { React, createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = (props) => {
  const [account, setAccount] = useState("");
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
