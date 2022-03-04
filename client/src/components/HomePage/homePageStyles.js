import { makeStyles } from '@material-ui/core/styles'
import image from "../../assets/images/image-2.jpg";


export const useStyles = makeStyles((theme)=>({
    HomePageImage: {
        backgroundImage: `url(${image})`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
      },
      AppBar:{
        backgroundColor: theme.palette.primary.main
      },
      ContainerStyle: {
          padding: theme.spacing(3)
      }
}))