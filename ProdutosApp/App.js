import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ProductCard } from "./src/components/ProductCard";

import {ListProducts} from './src/hooks/ListProducts'
export default function App() {
  
  return (
    <View style={styles.box}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Loja de peixes</Text>
        {ListProducts.map((product)=>{
          return(
            <ProductCard Url={product.Url} name={product.name} price={product.price}/>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: "100%",
    alignItems: 'center', 
    justifyContent: 'center',
 
  },
  title:{
    flex:1,
   
    fontSize: 20
  },
  scroll:{
    width: "100%",
    height: "100%",
  }
});
