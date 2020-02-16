import React, { useReducer, createContext } from 'react';

export const GlobalStateContext = createContext(null);
export const GlobalDispatchContext = createContext(null);

export enum SiteFocus {
  Code = 'code',
  Music = 'music',
}

export interface State {
  siteFocus: SiteFocus;
}

export enum Actions {
  ToggleSiteFocus,
  SetSiteFocusToCode,
  SetSiteFocusToMusic,
}

const initialState: State = {
  siteFocus: SiteFocus.Code,
};

const reducer = (state: State, action) => {
  switch (action.type) {
    case Actions.ToggleSiteFocus:
      return {
        ...state,
        siteFocus:
          state.siteFocus === SiteFocus.Code ? SiteFocus.Music : SiteFocus.Code,
      };
    case Actions.SetSiteFocusToCode:
      return {
        ...state,
        siteFocus: SiteFocus.Code,
      };
    case Actions.SetSiteFocusToMusic:
      return {
        ...state,
        siteFocus: SiteFocus.Music,
      };
    default:
      throw new Error('Invalid action in reducer.');
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
