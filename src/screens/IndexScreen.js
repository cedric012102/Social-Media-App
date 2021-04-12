// import React from "react";
// import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


// const IndexScreen = ({ navigation }) => {
  
//   return (
//     <View>
//     <Text>Home Screen</Text>
//     <Button 
//       onPress={() => navigation.navigate('Login')}
//       title="Go to Log In Screen"
//       />
    
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default IndexScreen;


///////////////////////////////////////////////////////////




// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
// import { Context } from '../context/CommentContext';
// import { Feather } from '@expo/vector-icons';


// const IndexScreen = ({ navigation }) => {
  
// const { state, addMediaPost, deleteMediaPost } = useContext(Context);
    
// return (

//   <View>
//     <Button title="Add Media" onPress={addMediaPost}/>
//         <FlatList 
//         data={state}
//         keyExtractor={(mediaPost) => mediaPost.title}
//         renderItem={({ item }) => {
//             return (
//             <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
//             <View style={styles.row}>
//                 <Text style={styles.title}>{item.title} - {item.id}</Text>
//                 <TouchableOpacity onPress={() => deleteMediaPost(item.id)}>
//                 <Feather style={styles.icon} name='trash' />
//                 </TouchableOpacity>
//             </View>
//             </TouchableOpacity>
//             );
//         }}
//         />
//     </View>
//     );
// };

// IndexScreen.navigationOptions = () => {
//     return {
//         headerRight: <Feather name='plus' size={30} />
//     };
// };

// const styles = StyleSheet.create({
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingVertical: 20,
//         paddingHorizontal: 10,
//         borderTopWidth: 1,
//         borderColor: 'gray',
//     },
//     title: {
//         fontSize: 18,
//     },
//     icon: {
//         fontSize: 24,
//     }
// });

// export default IndexScreen;


