import React from "react";
// import CurrentWeather from "@/components/CurrentWeather";
import { View, StyleSheet } from "react-native";
import UpcomingWeather from "@/app/(tabs)/UpcomingWeather";
import City from "./city";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
