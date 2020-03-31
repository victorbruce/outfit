import React from "react";
import { Animated, StyleSheet, ScrollView, Image } from "react-native";
import { Block, Text, Button, Utils } from "expo-ui-kit";

// constants
import { images, theme } from "../constants";
const { background } = images;

// theme
const { rgba } = Utils;
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
  const scrollX = new Animated.Value(0);

  const renderImages = () => (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: scrollX } } }
      ])}
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
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <Block
        flex={false}
        row
        middle
        margin={[SIZES.small, 0, SIZES.padding * 2, 0]}
      >
        {backgrounds.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          });

          return (
            <Block
              gray
              animated
              flex={false}
              key={`dot-${index}`}
              radius={SIZES.small}
              margin={[0, SIZES.small / 2]}
              color={rgba(COLORS.gray)}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };

  return (
    <Block style={styles.container} safe>
      <Block center middle>
        {renderImages()}
      </Block>
      <Block flex={false} center bottom margin={60}>
        <Text h3 semibold theme={theme}>
          Secured, forever.
        </Text>
        <Text center caption gray margin={[SIZES.small, 0]}>
          Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
          Quisque volutpat augue enim, pulvinar lobortis.
        </Text>

        {renderDots()}

        <Button
          theme={theme}
          primary
          // style={{ borderRadius: 30 }}
          onPress={() => navigation.navigate("VPN")}
        >
          <Text
            center
            white
            caption
            bold
            margin={[SIZES.padding / 2, SIZES.padding * 2]}
          >
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
  },
  dot: { width: SIZES.base, height: SIZES.base }
});

export default Welcome;
