import { createTheme } from '@mui/material';
import { purple, orange } from '@mui/material/colors';

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