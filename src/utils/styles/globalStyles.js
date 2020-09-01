import jss from 'jss';
import { SheetsRegistry } from 'react-jss';
import preset from 'jss-preset-default';

const styles = {
  '@global': {
    body: {
      backgroundColor: 'whitesmoke !important',
      margin: 0,
      padding: 0,
    },
  },
  '@font-face': [
    {
      fontFamily: 'dana',
      src: 'url(./fonts/dana/eot/dana-regular.eot)',
      fallbacks: [
        {
          src:
            'url(./fonts/dana/eot/dana-regular.eot?#iefix) format(embedded-opentype)',
        },
        { src: 'url(./fonts/dana/woff2/dana-regular.woff2) format(woff2)' },
        { src: 'url(./fonts/dana/woff/dana-regular.woff) format(woff)' },
      ],
    },
    {
      fontFamily: 'budmo',
      src: 'url(./fonts/budmo.ttf)',
    },
  ],
};

const setupGlobalStyles = () => {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss.createStyleSheet(styles).attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
};
export default setupGlobalStyles;
