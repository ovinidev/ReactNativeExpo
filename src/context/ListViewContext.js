import React, { createContext, useState } from 'react';

export const ListViewContext = createContext();

export default function ListViewProvider({ children }) {
  const [clicado, setClicado] = useState(false);

  const toggleList = () => {
    setClicado(!clicado);
  }

  return (
    <ListViewContext.Provider value={{ clicado, toggleList }}>
      {children}
    </ListViewContext.Provider>
  )
}