import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from './src/navigation';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation style={styles.main} />
    </Provider>
  );
}

// styles
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
