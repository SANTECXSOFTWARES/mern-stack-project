import { createTheme } from '@material-ui/core';
import { purple, orange } from '@material-ui/core/colors';

const primaryColor = purple[800];
const secondaryColor = orange[600];

 const theme = createTheme({
    palette:{
        primary:{
            main: primaryColor
        },
        secondary:{
            main: secondaryColor
        }
    }
    // components:{
    //     MuiAppBar:{
    //         styleOverrides:{
    //             root:{
    //                 background: secondaryColor
    //             }
    //         }
    //     }
    // }
})

export default theme;