import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../styles/colors";
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

const crystalUiStyles = createUseStyles({
  crystalUi__base: {
    background: `linear-gradient(105deg, #FFF, ${colors.purple.__light.__1}, ${colors.purple.__dark.__1}, ${colors.orange.__dark.__1})`,
    backgroundSize: "300% 300%",
    transition: "0.4s",
    backgroundPosition: "100% 100%",
  },
  crystalUi__dark: {
    backgroundPosition: "100% 100%",
  },
  crystalUi__light: {
    backgroundPosition: "0% 0%",
  },
});

export const ThemeContextProvider: React.FC<
  React.PropsWithChildren & ThemeProviderProps
> = ({ children, theme, screenHeightBreakPoint }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    theme,
    screenHeightBreakPoint,
  });
  const styles = crystalUiStyles();

  React.useEffect(() => {
    document.body.classList.add(styles.crystalUi__base);
  }, []);

  React.useEffect(() => {
    dispatch({ action: themeActions.setTheme, params: { theme } });
  }, [theme]);

  React.useEffect(() => {
    dispatch({
      action: themeActions.setScreenHeightBreakPoint,
      params: { screenHeightBreakPoint },
    });
  }, [screenHeightBreakPoint]);

  React.useEffect(() => {
    const oppositeTheme = state.theme === "dark" ? "light" : "dark";
    document.body.classList.remove(styles[`crystalUi__${oppositeTheme}`]);
    document.body.classList.add(styles[`crystalUi__${state.theme}`]);
  }, [state.theme]);

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
