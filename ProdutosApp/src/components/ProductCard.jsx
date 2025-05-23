import { Image, StyleSheet, Text, View } from "react-native";


export function ProductCard({Url, name, price}) {
    return(
        <View style={style.container}>
           

            <Text style={style.title}>{name}</Text>
            <Image style={style.image} source={Url}/>
            <Text style={style.text}> <b>Preço</b>  - R$: {price}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        padding: 20,
        width: "100%",
        height: 400,
        marginVertical: 20,
        borderRadius: 10,

        backgroundColor: 'brown',
        shadowOffset: { width: 0, height: 4 },
        elevation: 10,

    },

    
    image: {
        width: '50%',
        borderRadius: 10,
        maxHeight: 300,
        

    },
    
    title: {
        fontWeight: "bold",
        fontSize: 20      
    },
    text: {
        fontSize: 15
    }
})