import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
    direction: 'ltr',
    palette: {
        primary: {
            main: '#1976D2',
        },
        secondary: {
            main: '#30b1dc',
        },
        success: {
            main: '#4CAF50',
        },
        info: {
            main: '#2196F3',
        },
        warning: {
            main: '#FB8C00',
        },
        error: {
            main: '#FF5252',
        },
        background: {
            default: '#f5f5f5',
        },
    },
});

export { theme };
