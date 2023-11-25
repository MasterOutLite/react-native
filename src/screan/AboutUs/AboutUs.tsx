import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";

function AboutUs() {
  return (
    <View>
      <Text variant="displaySmall">Про мене</Text>
      <Text variant="titleMedium">Звати Майчук Тарас</Text>
      <Text variant="titleMedium">Вчусь на 121</Text>
      <View style={{ padding: 20 }}>
        <Image style={{ width: "100%", height: "100%" }}
               source={require("./../../img/photo_2023-10-28_16-00-42.jpg")} />
      </View>
    </View>
  );
}

export default AboutUs;
