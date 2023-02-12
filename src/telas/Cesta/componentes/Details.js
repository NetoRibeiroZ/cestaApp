import { React } from "react";
import { StyleSheet, Image, Text, View } from "react-native"
import Texto from "../../../componentes/Texto";
import Botao from './button';



export default function Details({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return <>
    <View style={estilos.cesta}>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
        </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
    </View>
    <Botao texto={botao} style={estilos.botao} onPress={() => {}} />
    
    </>
}
const estilos = StyleSheet.create({
    cesta:{
      paddingHorizontal:16,
      paddingVertical:8
    },
    nome:{
        fontSize:26,
        lineHeight: 50,
        fontFamily: "MontserratBold"
    },
    fazenda:{
      flexDirection:"row"
    },
    imagemFazenda:{
    width:32,
    height:32
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight: 26,
        fontFamily: "MontserratRegular",

    },
    descricao:{
        fontSize:16,
        lineHeight: 26,

    },
    preco:{
        marginTop: 8,
        color:"#2A9F95",
        fontWeight:"bold",
        fontSize:16,
        lineHeight: 42
    },
    botao:{
        marginTop: 16,
        backgroundColor : "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
        
    },
    textoBotao:{
        textAlign: "center",
        color:"#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight:"bold"
    }
});