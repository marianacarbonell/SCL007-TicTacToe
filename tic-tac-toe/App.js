import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: "row" }}>
          <View style={(styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 })} />
          <View style={(styles.tile, { borderTopWidth:0 })} />
          <View style={(styles.tile, {borderTopWidth:0, bordertRigthWidht:0})} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={(styles.tile, {borderLeftWidth: 0})} />
          <View style={(styles.tile, {})} />
          <View style={(styles.tile, {bordertRigthWidht:0})} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={(styles.tile, {borderBottomWdith:0, borderLeftWidth: 0})} />
          <View style={(styles.tile, {borderBottomWdith:0})} />
          <View style={(styles.tile, {borderBottomWdith:0, bordertRigthWidht:0})} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    borderWidth: 1,
    width: 100,
    height: 100,
  }

});
