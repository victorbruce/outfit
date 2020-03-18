import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VPN = () => {
  return (
    <View style={styles.container}>
      <Text>VPN screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default VPN;
