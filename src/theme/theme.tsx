import { createTheme } from '@mui/material/styles';

/** Think of creating a theme as a two-step composition process:
    first, you define the basic design options; then,
    you'll use these design options to compose other options.
**/

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

//* Uncomment this if you want to alter a specific variable in the theme
// theme = createTheme(theme, {
//   palette: {
//     info: {
//       main: theme.palette.secondary.main,
//     },
//   },
// });

export default theme;
