import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface listItemProps {
  dt_text: string;
  min: number;
  max: number;
  condition: string;
}

const ListItem: React.FC<listItemProps> = ({
  dt_text,
  min,
  max,
  condition,
}) => {
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>Min: {min}°C</Text>
      <Text style={styles.temp}>Max: {max}°C</Text>
      <Text>Condition: {condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
});

export default ListItem;
