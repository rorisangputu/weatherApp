import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Top content */}
      <View style={styles.container}>
        <Feather name="sun" size={60} color="white" />
        <Text style={styles.temp}>6°C</Text>
        <Text style={styles.feels}>Feels like: 5°C</Text>
        <View style={styles.HighLowWrapper}>
          <Text style={styles.hilo}>Hi: 10°C</Text>
          <Text style={styles.hilo}>Lo: 6°C</Text>
        </View>
      </View>

      {/* Bottom content */}
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's perfect T-shirt weather</Text>
      </View>
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
