import React from "react";
import { Block, Text, Button } from "galio-framework";
import Icon from "./Icon"
import { LinearGradient as Gradient } from "expo";
import { StyleSheet } from "react-native";

const GRADIENT_BLUE = ["#6B84CA", "#8F44CE"];
const gradientColors = GRADIENT_BLUE;
const BASE_SIZE = 16;
const COLOR_WHITE = "#FFF";
const COLOR_GREY = "#898989";

export const CardHome = ({icon, title, iconFamily, subtitle}) => {
  return (
    <Block row center card shadow space="between" style={styles.card}>
      <Block        
        style={[styles.gradient, styles.left]}
      >
        <Icon
          size={BASE_SIZE}
          name={icon}
          color={COLOR_WHITE}
          family={iconFamily}
        />
      </Block>

      <Block flex>
        <Text size={BASE_SIZE * 1.125}>{title}</Text>
        <Text size={BASE_SIZE * 0.875} muted>
          {subtitle}
        </Text>
      </Block>
      <Button style={styles.right}>
        <Icon
          size={BASE_SIZE}
          name="minimal-right"
          family="Galio"
          color={COLOR_GREY}
        />
      </Button>
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "transparent",
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_GREY,
    shadowOpacity: 0.4,
  },
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: "transparent",
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B84CA"
  },
});

