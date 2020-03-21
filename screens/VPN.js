import React from "react";
import { StyleSheet, Image } from "react-native";
import { Block, Text, Utils, Button } from "expo-ui-kit";

// constants
import { images } from "../constants/";

const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

const VPN = () => {
  return (
    <Block safe center>
      <Block flex={false} padding={[30, 0]}>
        <Text title semibold>
          VPN
        </Text>
      </Block>

      <Block center middle>
        <Block flex={false} row center middle>
          <Text subtitle semibold gray>
            CONNECTED
          </Text>
          <Block radius={10} color={COLORS.success} style={styles.status} />
        </Block>

        <Image source={images.icons.offline} style={styles.image} />

        <Button outlined style={styles.connect}>
          <Text caption center bold margin={[20, 0]}>
            CONNECTED
          </Text>
        </Button>
      </Block>

      <Block flex={false} middle center white shadow style={{ width: "100%" }}>
        <Text>Servers</Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  connect: {
    width: SIZES.width / 2
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20
  },
  status: {
    width: 8,
    height: 8,
    marginLeft: 10,
    backgroundColor: "green"
  }
});

export default VPN;
