import React, { useState } from "react";
import { StyleSheet, Image, Modal } from "react-native";
import { Block, Text, Utils, Button } from "expo-ui-kit";

// constants
import { images, servers } from "../constants/";
const {icons} = images;

const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

const VPN = () => {
  const [connected, setConnected] = useState(false);
  const [server, setServer] = useState(null);
  const [automatic, setAutomatic] = useState({
    name: "Automatic",
    icon: icons.automatic
  });
  const [show, setShow] = useState(false);

  const handleConnect = () => {
    setConnected(!connected);
  };

  const renderServer = () => {
    return (
      <Block flex={false} row center middle>
        <Image source={images.icons.automatic} />
        <Text margin={[0, 10]}>Automatic</Text>
        <Image source={images.icons.dropdown} />
      </Block>
    );
  };

  const renderServers = () => {
    const connection = server || automatic

    return (
      <Modal visible={show} animationType="fade" transparent>
        <Block bottom gray>
          <Block flex={false} white middle padding={[SIZES.padding, 0]}>
            <Text>Servers</Text>
          </Block>
        </Block>
      </Modal>
    )
  }
  return (
    <Block safe center>
      <Block flex={false} padding={[30, 0]}>
        <Text title semibold>
          VPN
        </Text>
      </Block>

      <Block center middle>
        <Block
          flex={false}
          row
          center
          middle
          white
          shadow
          radius={SIZES.base * 3}
          padding={[SIZES.base, SIZES.padding]}
        >
          <Text subtitle semibold gray height={30}>
            {connected ? "Connected" : "Disconnected"}
          </Text>
          <Block
            flex={false}
            radius={10}
            color={connected ? COLORS.success : rgba(COLORS.gray, 0.5)}
            style={styles.status}
          />
        </Block>

        <Image
          source={images.icons[connected ? "online" : "offline"]}
          style={styles.image}
        />

        <Button
          outlined={connected}
          style={styles.connect}
          onPress={handleConnect}
        >
          <Text
            caption
            center
            bold
            white={!connected}
            margin={[SIZES.padding, 0]}
          >
            {connected ? "DISCONNECT" : "CONNECT NOW"}
          </Text>
        </Button>
      </Block>

      <Block flex={false} middle white shadow style={{ width: "100%" }}>
        <Button transparent>{renderServer()}</Button>
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
    marginLeft: 10
  }
});

export default VPN;
