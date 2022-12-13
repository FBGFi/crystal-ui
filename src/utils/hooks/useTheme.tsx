import React from "react";
import { DefaultStyleProps, ThemeOption } from "../../types/types";

interface ThemeState {
  theme: ThemeOption;
  screenHeightBreakPoint?: number;
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
  screenHeightBreakPoint: undefined,
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
  screenHeightBreakPoint?: number;
}

const themeActions: { [fName: string]: StateChangeAction } = {
  setTheme: (state, { theme }) => ({ ...state, theme: theme || state.theme }),
  setScreenHeightBreakPoint: (state, { screenHeightBreakPoint }) => ({
    ...state,
    screenHeightBreakPoint,
  }),
};

export const ThemeContextProvider: React.FC<
  React.PropsWithChildren & ThemeProviderProps
> = ({ children, theme, screenHeightBreakPoint }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    theme,
    screenHeightBreakPoint,
  });

  React.useEffect(() => {
    dispatch({ action: themeActions.setTheme, params: { theme } });
  }, [theme]);

  React.useEffect(() => {
    dispatch({
      action: themeActions.setScreenHeightBreakPoint,
      params: { screenHeightBreakPoint },
    });
  }, [screenHeightBreakPoint]);

  const ResponsiveStyles = () => {
    return (
      <style>
        {
          /* eslint-disable */
        `
          :root {
            font-size: 10px;
          }

          @media (height > ${state.screenHeightBreakPoint}px) {
            :root {
              font-size: calc(100vh / ${state.screenHeightBreakPoint} * 10);
            }
          }
        `
          /* eslint-enable */
        }
      </style>
    );
  };

  return (
    <>
      {screenHeightBreakPoint && <ResponsiveStyles />}
      <ThemeContext.Provider value={{ state, dispatch }}>
        {children}
      </ThemeContext.Provider>
    </>
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

  const setScreenHeightBreakPoint = (screenHeightBreakPoint: number) => {
    dispatch({
      action: themeActions.screenHeightBreakPoint,
      params: { screenHeightBreakPoint },
    });
  };

  const getThemeDefaultStyleKeys = (): DefaultStyleProps => ({
    colorVariant: `__${state.theme}`,
    screenHeightBreakPoint: state.screenHeightBreakPoint,
  });

  return {
    state,
    dispatch,
    setTheme,
    setScreenHeightBreakPoint,
    getThemeDefaultStyleKeys,
  };
};
