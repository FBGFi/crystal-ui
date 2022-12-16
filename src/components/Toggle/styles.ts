import { createDynamicStyles, opposeColor } from "../../utils/utils";
import colors from "../../styles/colors";

const toggleColors = {
  toggledOn: {
    track: {
      backgroundColor: {
        __dark: colors.purple.__dark.__3,
        __light: colors.purple.__light.__3,
      },
      boxShadow: {
        __dark: `0 0 2px ${colors.purple.__dark.__3}`,
        __light: `0 0 2px ${colors.purple.__light.__3}`,
      },
    },
    handle: {
      backgroundColor: {
        __dark: colors.purple.__dark.__1,
        __light: colors.purple.__light.__1,
      },
      boxShadow: {
        __dark: `0 0 2px ${colors.purple.__dark.__3}`,
        __light: `0 0 2px ${colors.purple.__light.__3}`,
      },
      borderColor: {
        __dark: `0 0 2px ${colors.purple.__dark.__3}`,
        __light: `0 0 2px ${colors.purple.__light.__3}`,
      },
    },
  },
  toggledOff: {
    track: {
      backgroundColor: {
        __dark: colors.purple.__dark.__disabled,
        __light: colors.purple.__light.__disabled,
      },
      boxShadow: {
        __dark: `0 0 2px ${colors.purple.__dark.__3}`,
        __light: `0 0 2px ${colors.purple.__light.__3}`,
      },
    },
    handle: {
      backgroundColor: {
        __dark: colors.purple.__dark.__disabled,
        __light: colors.purple.__light.__disabled,
      },
      boxShadow: {
        __dark: `0 0 2px ${colors.purple.__dark.__3}`,
        __light: `0 0 2px ${colors.purple.__light.__3}`,
      },
      borderColor: {
        __dark: `0 0 2px ${colors.purple.__dark.__3}`,
        __light: `0 0 2px ${colors.purple.__light.__3}`,
      },
    },
  },
};

export const toggleStyles = createDynamicStyles({
  __toggle: ({ screenHeightBreakPoint, colorVariant }) => ({
    position: "relative",
    display: "inline-block",
    width: screenHeightBreakPoint ? "5rem" : 50,
    height: screenHeightBreakPoint ? "2rem" : 20,

    "& input": {
      opacity: 0,
      width: 0,
      height: 0,

      "&:checked + $__toggle__slider": {
        backgroundColor:
          toggleColors.toggledOn.track.backgroundColor[colorVariant],
      },

      "&:focus + $__toggle__slider": {
        boxShadow: "0 0 1px #2196F3",
      },

      "&:checked + $__toggle__slider:before": {
        transform: `translateX(${screenHeightBreakPoint ? "3rem" : "30px"})`,
        backgroundColor: colors.purple[colorVariant]["__1"],
        borderColor: colors.purple[opposeColor(colorVariant)]["__2"],
        boxShadow: `0 0 3px ${colors.purple[colorVariant]["__1"]}`,
      },
    },
  }),
  __toggle__slider: ({ screenHeightBreakPoint, colorVariant }) => ({
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.purple[colorVariant]["__disabled"],
    transition: ".4s",
    borderRadius: screenHeightBreakPoint ? "1rem" : 10,

    "&:before": {
      boxSizing: "border-box",
      borderColor: colors.purple[opposeColor(colorVariant)]["__disabled"],
      borderWidth: screenHeightBreakPoint ? "0.1rem" : 1,
      boxShadow: `0 0 3px ${
        colors.purple[opposeColor(colorVariant)]["__disabled"]
      }`,
      borderStyle: "solid",
      position: "absolute",
      content: '""',
      borderRadius: screenHeightBreakPoint ? "1.2rem" : 12,
      height: screenHeightBreakPoint ? "2.4rem" : 24,
      width: screenHeightBreakPoint ? "2.4rem" : 24,
      top: screenHeightBreakPoint ? "-0.2rem" : -2,
      left: screenHeightBreakPoint ? "-0.2rem" : -2,
      backgroundColor: colors.purple[colorVariant]["__disabled"],
      transition: ".4s",
    },
  }),
});
