/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import IconText from "@/components/IconText";

const city = () => {
  const {
    container,
    bgImage,
    cityName,
    cityText,
    countryName,
    populationText,
    populationWrapper,
    riseSetStyle,
    riseSetText,
    riseSetWrapper,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={bgImage}
        source={require("../../assets/images/thailand.jpg")}
        resizeMode="cover"
      >
        <Text style={[cityName, cityText]}> Kuala Lumpur</Text>
        <Text style={[countryName, cityText]}> Malaysia</Text>

        <View>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"2 mil"}
            bodyTextStyles={populationText}
            wrapperStyles={populationWrapper}
          />
        </View>
        <View style={riseSetWrapper}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"5:15am"}
            bodyTextStyles={riseSetText}
            wrapperStyles={riseSetStyle}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"20:05pm"}
            bodyTextStyles={riseSetText}
            wrapperStyles={riseSetStyle}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  bgImage: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
    marginTop: 20,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 25,
    color: "white",
  },
  riseSetStyle: {
    alignItems: "center",
    gap: 5,
  },
});

export default city;
