import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles, wrapperStyles } =
    props;
  const { textTheme } = styles;
  return (
    <View style={[wrapperStyles]}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});
export default IconText;
