import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
// import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const Products = ( { name, idString, deleteProduct } ) => {
    return (
        <Pressable
            onPress={ () => deleteProduct(idString) }
        >
            <View style={styles.items}>
                <Text style={styles.element}>{ name }</Text>
            </View>
        </Pressable>


        // <TouchableWithoutFeedback
        //     onPress={ () => console.log('Pressed') }
        // >
        //     <View style={styles.items}>
        //         <Text style={styles.element}>{ name }</Text>
        //     </View>
        // </TouchableWithoutFeedback>

        // <TouchableOpacity
        //     onPress={ () => console.log('Pressed') }
        //     activeOpacity={0.2}
        // >
        //     <View style={styles.items}>
        //         <Text style={styles.element}>{ name }</Text>
        //     </View>
        // </TouchableOpacity>

        // <TouchableHighlight
        //     onPress={ () => console.log('Pressed') }
        //     activeOpacity={0.2}
        //     underlayColor={'yellow'}
        // >
        //     <View style={styles.items}>
        //         <Text style={styles.element}>{ name }</Text>
        //     </View>
        // </TouchableHighlight>

        // <Pressable
        //     // onLongPress={ () => console.log('Pressed') }
        //     onPress={ () => console.log('Pressed') }
        //     // style={ ({ pressed }) => [
        //     //     {
        //     //         backgroundColor: pressed ? 'blue' : 'red'
        //     //     }
        //     //   ]}
        //     // delayLongPress={5000}
        //     android_ripple={{ color: 'purple' }}
        // >
        //     <View style={styles.items}>
        //         <Text style={styles.element}>{ name }</Text>
        //     </View>
        // </Pressable>


    )
}



const styles = StyleSheet.create({
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: '#ffb6c1',
    padding: 20,
    fontSize: 18,
    marginVertical: 6,
  },
});

export default Products;