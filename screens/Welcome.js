import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Block, Text, Button, Utils } from "expo-ui-kit";

// constants
import { background } from "../constants/images";

// theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

const backgrounds = [
  {
    title: "Secured, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.welcome
  },
  {
    title: "Secured, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.encrypted
  },
  {
    title: "Secured, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.privacy
  }
];

const Welcome = ({ navigation }) => {
  const renderImages = () => (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
    >
      {backgrounds.map((item, index) => (
        <Block
          center
          bottom
          key={`img-${index}`}
          style={{ width: SIZES.width }}
        >
          <Image
            source={item.img}
            resizeMode="center"
            style={{ width: SIZES.width / 1.5, height: "100%" }}
          />
        </Block>
      ))}
    </ScrollView>
  );

  const renderDots = () => {
    return (
      <Block flex={false} row middle margin={[20, 0, 40, 0]}>
        <Block
          flex={false}
          radius={8}
          margin={[0, 5]}
          color={rgba(COLORS.gray)}
          style={{ width: 8, height: 8 }}
        />
        <Block
          flex={false}
          radius={8}
          margin={[0, 5]}
          color={rgba(COLORS.gray, 0.5)}
          style={{ width: 8, height: 8 }}
        />
        <Block
          flex={false}
          radius={8}
          margin={[0, 5]}
          color={rgba(COLORS.gray, 0.5)}
          style={{ width: 8, height: 8 }}
        />
      </Block>
    );
  };

  return (
    <Block style={styles.container} safe>
      <Block center middle>
        {renderImages()}
      </Block>
      <Block flex={false} center bottom margin={60}>
        <Text h3 semibold>
          Secured, forever.
        </Text>
        <Text center caption gray margin={[10, 0]}>
          Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
          Quisque volutpat augue enim, pulvinar lobortis.
        </Text>
        {renderDots()}
        <Button
          primary
          style={{ borderRadius: 30 }}
          onPress={() => navigation.navigate("VPN")}
        >
          <Text center white caption bold margin={[6, 26]}>
            GET STARTED
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

export default Welcome;
