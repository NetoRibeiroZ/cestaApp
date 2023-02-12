import { React } from "react";
import { Text,StyleSheet } from "react-native";

export default function Texto({children, style}){
    let st = styles.text;

    if(style?.fontWeight === 'bold'){
       st = styles.textBold; 
    }
    return <Text  style={[st,style]}>{children}</Text>


}

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})