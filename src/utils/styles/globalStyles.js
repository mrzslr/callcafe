import jss from "jss";
import { SheetsRegistry } from "react-jss";
import preset from "jss-preset-default";

const styles = {
  "@global": {
    body: {
      backgroundColor: "white !important",
    },
    
  },
};


export const setupGlobalStyles = () => {
  jss.setup(preset());
  

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss.createStyleSheet(styles).attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
};
