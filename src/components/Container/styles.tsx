import colors from "../../styles/colors";
import { createDynamicStyles } from "../../utils/utils";

export const containerStyles = createDynamicStyles({
  __container: ({ screenHeightBreakPoint }) => ({
    display: "flex",
    padding: screenHeightBreakPoint ? "1.6rem" : 16,
    border: `2px solid ${colors.purple.__dark.__disabled}`,
    backgroundColor: colors.purple.__dark.__1,
    boxShadow: `1px 1px 3px 0 ${colors.purple.__dark.__disabled}`,
    borderRadius: screenHeightBreakPoint ? "0.4rem" : 4,
    color: "#FFFFFF",
  }),
});
