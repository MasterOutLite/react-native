import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

function AboutUs() {
  return (
    <ScrollView style={{ paddingHorizontal: 8 }}>
      <Text variant="displaySmall">Про мене</Text>
      <Text variant="titleMedium">Звати Майчук Тарас</Text>
      <Text variant="titleMedium">Вчусь на 121</Text>
      <View style={{ minHeight: 600, marginBottom: 30 }}>
        <Image style={{ width: "100%", height: "100%" }}
               source={require("./../../img/photo_2023-10-28_16-00-42.jpg")} />
      </View>
    </ScrollView>
  );
}

export default AboutUs;
