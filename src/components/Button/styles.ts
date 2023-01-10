import colors from "../../styles/colors";
import { createDynamicStyles } from "../../utils/utils";

export const buttonStyles = createDynamicStyles({
  __button: ({ colorVariant }) => ({
    padding: "0.7rem 1.2rem",
    borderRadius: "1.5rem",
    border: `2px ${colors.purple.__dark.__disabled} solid`,
    boxShadow: `0 0 5px 0 ${colors.purple.__dark.__disabled}`,
    backgroundColor:
      colorVariant === "__dark"
        ? colors.purple.__dark.__1
        : colors.purple.__light.__3,
    color: "#FFFFFF",
    fontWeight: "bold",
    transition: "0.1s ease-in-out",
    "&:hover": {
      borderRadius: "2rem",
      cursor: "pointer",
      border: `3px ${
        colorVariant === "__dark"
          ? colors.purple.__light.__3
          : colors.purple.__light.__4
      } solid`,
      backgroundColor:
        colorVariant === "__dark"
          ? colors.purple.__light.__3
          : colors.purple.__light.__4,
      boxShadow: `0 0 20px 0 ${
        colorVariant === "__dark"
          ? colors.purple.__light.__3
          : colors.purple.__light.__4
      }`,
    },
    "&:active": {
      transition: "0s",
      translate: "0.2rem 0.2rem",
      border: "2px solid transparent",
      backgroundColor:
        colorVariant === "__dark"
          ? colors.purple.__light.__2
          : colors.purple.__light.__3,
    },
  }),
});
