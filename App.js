import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude:43.78527010823646, 
        longitude: -79.22812082294779,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
       <Marker
          coordinate={{
            latitude:43.78527010823646, 
            longitude: -79.22812082294779,
          }}
          title="Centennial College"
          description="I study here"
        />
    </MapView>
  </View>
  );
}
// AIzaSyAjXP2fQt0dJNukkJQhizU-jj0VMqT6oPM

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
