import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "@/components/RowText";

const CurrentWeather = () => {
  const {
    container,
    wrapper,
    temp,
    feels,
    HighLowWrapper,
    hilo,
    bodyWrapper,
    description,
    message,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      {/* Top content */}
      <View style={container}>
        <Feather name="sun" size={60} color="white" />
        <Text style={temp}>6°C</Text>
        <Text style={feels}>Feels like: 5°C</Text>
        <RowText
          wrapperStyles={HighLowWrapper}
          textStyleOne={hilo}
          textStyleTwo={hilo}
          messageOne={"Hi: 34°C"}
          messageTwo={"Lo: 20°C"}
        />
      </View>

      {/* Bottom content */}
      <RowText
        wrapperStyles={bodyWrapper}
        textStyleOne={description}
        textStyleTwo={message}
        messageOne={"It's Sunny"}
        messageTwo={"It's perfect T-shirt weather"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 48,
    color: "white",
  },
  feels: {
    fontSize: 30,
    color: "white",
  },
  hilo: {
    color: "white",
    fontSize: 20,
  },
  HighLowWrapper: {
    flexDirection: "row",
    gap: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 20,
  },
});

export default CurrentWeather;
