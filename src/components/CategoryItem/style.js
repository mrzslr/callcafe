import colors from "utils/styles/colors";
export default {
  container: {
    marginTop: 3,
    marginBottom: 3,
    width: "60px",
    height: "60px",
    borderRadius: "00.5rem",
    backgroundColor: "whtie",
    transition: "ease-in-out all 0.2s",
  },
  selected: {
    marginTop: 3,
    marginBottom: 3,
    width: "60px",
    height: "60px",
    borderRadius: "00.5rem",
    backgroundColor: colors.categoryItemBg,
    color: colors.white,
    transition: "ease-in-out all 0.2s",
    "& $icon": {
      filter: 'brightness(0) invert(1)'
    },
  },
  icon: {
    filter: 'brightness(0) invert(0)',
    margin: "1rem",
  },
};
