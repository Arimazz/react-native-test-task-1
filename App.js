import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getData } from './api';

export default function App() {
  useEffect(() => {
    const data = getData();

    console.log(data);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hehehehehe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
