import React, {useState} from 'react';

export const DataContext = React.createContext();

export default function DataContextProvider(props){
  const [classes, setClasses] = useState([]);

  return (
    <DataContext.Provider
      value={{classes}}>
      {props.children}
    </DataContext.Provider>
  );
};
