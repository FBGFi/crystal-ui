import colors from "../../styles/colors";
import { createDynamicStyles } from "../../utils/utils";

export const buttonStyles = createDynamicStyles({
  __button: ({ colorVariant }) => ({
    padding: "0.5rem 1rem",
    backgroundColor: colors.orange[colorVariant]["__1"],
    color: "#FFF",
  }),
});
