import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

const Scanner = () => {

    const [hashPermission, setHashPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
      (async () => {
        const status = await BarCodeScanner.requestPermissionsAsync();
        setHashPermission(status === 'granted');
      })();
    }, []);
    
    const handleBarcodeScanned = ({type, data}) => {
        setScanned(true);
        alert(`Bar Code with Type ${type} and data ${Linking.openURL(`${data}`)} has been scanned`);
    }

    if (hashPermission === null) {
        return <Text>Requesting for Camera Permission!</Text>
    }
    if (hashPermission === false) {
        return <Text>No Access To Camera</Text>
    }

  return (
    <View style={styles.container}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title="Tab to Scan Again" onPress={() => setScanned(false)}/>}
    </View>
  )
};

export default Scanner;
