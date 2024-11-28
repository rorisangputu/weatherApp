import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const { wrapperStyles, textStyleOne, textStyleTwo, messageOne, messageTwo } =
    props;
  return (
    <View style={[wrapperStyles]}>
      <Text style={[textStyleOne]}>{messageOne}</Text>
      <Text style={[textStyleTwo]}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
