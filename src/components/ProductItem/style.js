export default {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginRight: '10px',
    color: 'black',
    borderRadius: '5px',
    counterIncrement: 'carousel-cell',

    '& :before': {
      display: 'block',
      textAlign: 'center',
      lineHeight: '200px',
      fontSize: '80px',
      color: 'white',
    },
  },
  cover: {
    margin: '0 auto',
    textAlign: 'center',
    '& img': {
      width: '100%',
      height: '160px',
      objectFit: 'contain',
    },

  },
  title: {
    fontFamily: 'Mj_Dinar Two Medium',
    fontWeight: 'bold',
    padding: '5px',
    fontSize: 'large',
    marginTop: '0',

  },
};
