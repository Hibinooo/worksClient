
export const themeOptions = (mode) => ({
  palette: {
    mode: 'light',
    button: {
      background: '#bf00ff',
      text: 'rgba(255,255,255,0.87)',
      hover: '#b100fd'
    },
    primary: {
      main: '#bf00ff',
    },
    secondary: {
      main: '#ffbf00',
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: ({ theme }) => ({
  //         //backgroundColor: theme.palette.button.background,
  //        // color: theme.palette.button.text,
  //         '&:hover': {
  //           backgroundColor: theme.palette.button.hover,
  //         },
  //         // '&.Mui-disabled': {
  //         //   backgroundColor: theme.palette.button.disabled
  //         // },
  //       }),
  //     },
  //   },
  // }
});