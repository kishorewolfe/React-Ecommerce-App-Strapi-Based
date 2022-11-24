import {createTheme} from '@mui/material'
import { fontSize } from '@mui/system'

export const shades ={


primary: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000"
},
secondary: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333"
},
neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929"
},


}
export const theme = createTheme({
    palette:{
        primary:{
            main:shades.primary[500]
        },
        secondary:{
            main:shades.secondary[500]
        },
        neutral:{
            dark:shades.neutral[700],
            main:shades.neutral[500],
            light:shades.neutral[200]
        }
    },
    typography:{
        fontFamily:["Titillium Web","Roboto"].join(","),
        fontSize:12,
        h1:{
            fontFamily:["jost","Roboto"].join(","),
            fontSize:48
        },
        h2:{
            fontFamily:["jost","Roboto"].join(","),
            fontSize:36
        },
        h3:{
            fontFamily:["jost","Roboto"].join(","),
            fontSize:20
        },
        h4:{
            fontFamily:["jost","Roboto"].join(","),
            fontSize:14
        },
    }
})




