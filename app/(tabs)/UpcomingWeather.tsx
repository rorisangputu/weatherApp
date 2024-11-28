/* eslint-disable @typescript-eslint/no-require-imports */
import ListItem from "@/components/ListItem";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";

const DATA = [
  {
    dt_text: "2024-06-01 12:00:00",
    main: {
      temp_max: 8.5,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_text: "2024-06-01 13:00:00",
    main: {
      temp_max: 8.5,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Partly Cloudy",
      },
    ],
  },
  {
    dt_text: "2024-06-01 14:00:00",
    main: {
      temp_max: 8.5,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Light rain",
      },
    ],
  },
];

// Define the type for weather data items
interface WeatherData {
  dt_text: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: string;
  }[];
}

const UpcomingWeather = () => {
  const renderItem = ({ item }: { item: WeatherData }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../assets/images/clouds.jpg")}
      >
        <Text>Upcoming Weather</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "beige",
  },
  bgImage: {
    flex: 1,
  },
});
export default UpcomingWeather;
