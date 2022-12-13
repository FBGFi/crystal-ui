import React from "react";
import { DefaultStyleProps, ThemeOption } from "../../types/types";

interface ThemeState {
  theme: ThemeOption;
}

type StateChangeAction = (
  state: ThemeState,
  payload: Partial<ThemeState>,
) => ThemeState;
type StateChangePayload = {
  action: StateChangeAction;
  params: Partial<ThemeState>;
};

const initialState: ThemeState = {
  theme: "dark",
};

const reducer = (
  state: ThemeState,
  { action, params }: StateChangePayload,
): ThemeState => action(state, params);

const ThemeContext = React.createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<StateChangePayload>;
}>({ state: initialState, dispatch: () => {} });

interface ThemeProviderProps {
  theme: ThemeOption;
}

const themeActions: { [fName: string]: StateChangeAction } = {
  setTheme: (state, { theme }) => ({ ...state, theme: theme || state.theme }),
};

export const ThemeContextProvider: React.FC<
  React.PropsWithChildren & ThemeProviderProps
> = ({ children, theme }) => {
  const [state, dispatch] = React.useReducer(reducer, { theme });

  React.useEffect(() => {
    dispatch({ action: themeActions.setTheme, params: { theme } });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook for subscribing to the currently used theme across the application.
 */
export const useTheme = () => {
  const { state, dispatch } = React.useContext(ThemeContext);

  const setTheme = (theme: ThemeOption) => {
    dispatch({ action: themeActions.setTheme, params: { theme } });
  };

  const getThemeDefaultStyleKeys = (): DefaultStyleProps => ({
    colorVariant: `__${state.theme}`,
  });

  return { state, dispatch, setTheme, getThemeDefaultStyleKeys };
};
