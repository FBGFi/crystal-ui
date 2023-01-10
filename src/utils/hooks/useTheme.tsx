import React from "react";
import colors from "../../styles/colors";
import { DefaultStyleProps, ThemeOption } from "../../types/types";
import { createDynamicStyles } from "../utils";

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

const crystalUiStyles = createDynamicStyles({
  crystalUi__base: {
    transition: "0.3s ease-in",
  },
  crystalUi__dark: {
    backgroundColor: colors.purple.__dark.__1,
    '& [class^="fade_in_bg"]': {
      backgroundImage: `linear-gradient(105deg, transparent, ${colors.orange.__dark.__1})`,
    },
  },
  crystalUi__light: {
    backgroundColor: "#FFFFFF",
    '& [class^="fade_in_bg"]': {
      backgroundImage: `linear-gradient(105deg, transparent, ${colors.purple.__light.__1})`,
    },
  },
  fade_in_bg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -100000000,
    backgroundSize: "200% 200%",
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
    document.body.classList.add(styles.__linear_background__animated);
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
    const animationClass = styles[`crystalUi__${state.theme}`];
    const oppositeClass =
      state.theme === "light"
        ? styles.crystalUi__dark
        : styles.crystalUi__light;
    document.body.classList.remove(oppositeClass);
    document.body.classList.add(animationClass);
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
        <div className={styles.fade_in_bg} />
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
