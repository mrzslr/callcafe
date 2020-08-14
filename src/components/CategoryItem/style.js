import colors from "utils/styles/colors";
export default {
  container: {
    marginTop: "1rem",
    width: "60px",
    height: "60px",
    borderRadius: "1rem",
    border: "solid 3px #F1F3F7",
    backgroundColor: "whtie",
    transition: "ease-in-out all 0.2s",
    "&:hover": {
      backgroundColor: colors.primaryColor,
      color: colors.white,
      "& $icon": {
        filter:
          "invert(76%) sepia(56%) saturate(3423%) hue-rotate(2deg) brightness(107%) contrast(106%)",
      },
    },
  },
  icon: {
    filter:
      "invert(19%) sepia(10%) saturate(5998%) hue-rotate(190deg) brightness(95%) contrast(88%)",
    margin: "1rem",
  },
};
