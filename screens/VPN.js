import React, { useState } from "react";
import { StyleSheet, Image, Modal, ScrollView } from "react-native";
import { Block, Text, Utils, Button } from "expo-ui-kit";

// constants
import { images, theme, servers } from "../constants/";
const { icons } = images;

const { rgba } = Utils;
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

  const handleServer = server => {
    setShow(false);
    setServer(server);
    setConnected(false);
  };

  const renderServer = () => {
    const connection = server || automatic;
    return (
      <Block flex={false} row center middle>
        <Image source={connection.icon} />
        <Text margin={[0, 10]}>{connection.name}</Text>
        <Image source={icons.dropdown} />
      </Block>
    );
  };

  const renderServers = () => {
    const connection = server || automatic;
    return (
      <Modal visible={show} animationType="fade" transparent>
        <Block bottom color={rgba(COLORS.gray, 0.2)}>
          <Block flex={false} white middle padding={[SIZES.padding, 0]}>
            <Text subtitle center gray>
              Pick your Server
            </Text>
            <ScrollView>
              {servers.map(item => {
                const isConnected = connection.name === item.name;
                const isChecked = icons[isConnected ? "checked" : "unchecked"];
                return (
                  <Button
                    transparent
                    key={`server-${item.name}`}
                    onPress={() => handleServer(item)}
                  >
                    <Block
                      flex={false}
                      row
                      center
                      space="between"
                      margin={[SIZES.padding, SIZES.padding]}
                    >
                      <Block flex={false} row center>
                        <Image source={item.icon} />
                        <Text padding={[0, SIZES.h3]}>{item.name}</Text>
                      </Block>
                      <Image source={isChecked} />
                    </Block>
                  </Button>
                );
              })}
            </ScrollView>
          </Block>
        </Block>
      </Modal>
    );
  };
  return (
    <Block safe center white>
      <Block flex={false} padding={[50, 0]}>
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
          radius={SIZES.radius}
          padding={[SIZES.base, SIZES.padding]}
        >
          <Text theme={theme} subtitle semibold gray height={SIZES.h3}>
            {connected ? "Connected" : "Disconnected"}
          </Text>
          <Block
            flex={false}
            radius={SIZES.base}
            color={connected ? COLORS.success : rgba(COLORS.gray, 0.5)}
            style={styles.status}
          />
        </Block>

        <Image
          source={images.icons[connected ? "online" : "offline"]}
          style={styles.image}
        />

        <Button
          theme={theme}
          outlined={connected}
          style={[styles.connect, connected && styles.connected]}
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
        <Button transparent onPress={() => setShow(true)}>
          {renderServer()}
        </Button>
      </Block>
      {renderServers()}
    </Block>
  );
};

const styles = StyleSheet.create({
  connect: {
    width: SIZES.width / 2
  },
  connected: {
    borderColor: COLORS.black
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20
  },
  status: {
    width: SIZES.base,
    height: SIZES.base,
    marginLeft: SIZES.small
  },
  servers: {
    width: SIZES.width,
    height: SIZES.base * 9,
    shadowOffset: {
      width: 0,
      height: -5
    },
    shadowOpacity: 0.05,
    shadowRadius: SIZES.base / 2
  }
});

export default VPN;
