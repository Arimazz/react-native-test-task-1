import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import { getData } from './api';
import { styles } from './AppStyles';
import { Item } from './Item';

export default function App() {
  const [data, setData] = useState([]);

  const loadData = async() => {
    const dataFromServer = await getData();

    setData(dataFromServer);
  };

  const item = data[0];

  if (item) {
    return (
      <View style={styles.container}>
        <Item item={item} />
      </View>
    );
  }

  return (
    <View>
      <Text>Data loading</Text>
      <Button
        style={styles.button}
        title="loaddata"
        onPress={() => loadData()}
      />
    </View>
  );
}
