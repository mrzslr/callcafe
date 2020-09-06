export default {
  appBar: {
    position: 'relative',
  },
  title: {
    textAlign: 'right',
  },
  description: {
    direction: 'rtl',
    textAlign: 'right',
    paddingBottom: '4rem',
    lineHeight: 2,
  },
  image: {
    width: '100%',
  },
  navigationActions: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
    boxShadow: '0px 1px 5px whitesmoke, 0px -1px 20px whitesmoke',
  },
  navigationActionItem: {
    '& span': {
      fontWeight: 'bold',
      fontSize: 'medium',
      direction: 'rtl',
      color: 'black',
    },

  },
  navigationActionItemDisabled: {
    '& span': {
      fontWeight: 'bold',
      fontSize: 'medium',
      direction: 'rtl',
      color: 'grey',
    },
  },
};
