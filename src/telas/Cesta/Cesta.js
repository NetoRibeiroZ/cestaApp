import React from "react";
import Toppy from "./componentes/Top";
import Details from "./componentes/Details";
import Item from "./componentes/item";
import Texto from "../../componentes/Texto";
import { View,FlatList,StyleSheet } from "react-native";

export default function Cesta({topo, detalhes, itens}){
    return <>
    <FlatList
    data={itens.lista}
    renderItem={Item}
    keyExtractor={({nome})=> nome}
    ListHeaderComponent={()=>{
        return <>
        <View>     
        <Toppy {...topo} />
        <Details {...detalhes}/>
        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
     </View>
    </>  
    }}
    />
</>   
}
const estilos = StyleSheet.create({
    titulo: {
        color:"#464646",
        fontWeight:"bold",
        marginLeft:10,
        marginTop:32,
        fontSize: 20,
        lineHeight:  32
    }
  });


