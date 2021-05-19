import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#360033", "#0b8793"],
    title: "Drizzle",
    subTitle: "이슬비가 내립니다."
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#485563", "#29323c"],
    title: "Thunderstorm",
    subTitle: "천둥이 쾅쾅 ⚡️"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#73C8A9", "#373B44"],
    title: "Rain",
    subTitle: "비가 펑펑 오는 날 ☔️"
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#fe8c00", "#f83600"],
    title: "Snow",
    subTitle: "눈이 내려와아 ☃️"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#70e1f5", "#ffd194"],
    title: "Clouds",
    subTitle: "구름 낀 하늘 ☁️"
  },
  Atmosphere: {
    iconName: "weather-tornado",
    gradient: ["#556270", "#ff6b6b"],
    title: "Atmosphere",
    subTitle: "바람이 많이 부는 날입니다 🌪"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#D38312", "#A83279"],
    title: "Clear",
    subTitle: "맑은 하루 🌞"
  },
  default: {
    iconName: "weather-sunny",
    gradient: ["#9d50bb", "#6e48aa"],
    title: "Rain",
    subTitle: "맑은 하루 🌞"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={
        weatherOption[condition]
          ? weatherOption[condition].gradient
          : weatherOption["default"].gradient
      }
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <StatusBar barStyle="light-content" />
        <MaterialCommunityIcons
          color="white"
          size={96}
          name={
            weatherOption[condition]
              ? weatherOption[condition].iconName
              : weatherOption["default"].iconName
          }
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>
          {weatherOption[condition]
            ? weatherOption[condition].title
            : weatherOption["default"].title}
        </Text>
        <Text style={styles.subTitle}>
          {weatherOption[condition]
            ? weatherOption[condition].subTitle
            : weatherOption["default"].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clouds",
    "Atmosphere",
    "Clear"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "500",
    marginBottom: 10
  },
  subTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "500"
  }
});
