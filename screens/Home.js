import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const Home = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Button title="Scan" onPress={() => navigation.navigate('Scanner')}></Button>
    </View>
  );
};

export default Home;
