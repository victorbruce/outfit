import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "expo-ui-kit";

const Welcome = () => {
  return (
    <Block safe>
      <Block center middle>
        <Text h1>Welcome</Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({});

export default Welcome;
