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
    backgroundColor: colors.primaryColor,
    color: colors.white,
    transition: "ease-in-out all 0.2s",
    "& $icon": {
      filter:
        "invert(76%) sepia(56%) saturate(3423%) hue-rotate(2deg) brightness(107%) contrast(106%)",
    },
  },
  icon: {
    filter:
      "invert(19%) sepia(10%) saturate(5998%) hue-rotate(190deg) brightness(95%) contrast(88%)",
    margin: "1rem",
  },
};
