import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer';

export const StateContext = createContext();

const StateProvider = (props) => {

    const initialState = {
        folder: [
          {
            name: "DSA",
            playgrounds: [
              {
                groundName: "Stack Implementaion"
              }
            ]
          }
        ],
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <StateContext.Provider value={{state, dispatch}} >
        {props.children}
    </StateContext.Provider>
  )
}

export default StateProvider











        // codeItem: [],
