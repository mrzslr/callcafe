import jss from "jss";
import { SheetsRegistry } from "react-jss";
import preset from "jss-preset-default";

const styles = {
  "@global": {
    body: {
      backgroundColor: "white !important",
    },
  },
  "@font-face": [
    {
      fontFamily: "dana",
      src: `url(./fonts/dana/eot/dana-regular.eot)`,
    },
   
  ],
};

export const setupGlobalStyles = () => {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss.createStyleSheet(styles).attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
};
