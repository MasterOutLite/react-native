import React, { useEffect } from "react";
import { Button, Linking, ScrollView, View } from "react-native";
import { useNewsStore } from "../../store/useNewsStore";
import { Card, Text } from "react-native-paper";

function LastNews() {
  const { getNews, news } = useNewsStore();
  const handleUpdateNews = () => {
    getNews();
    console.log("Send request on get news");
  };

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 6, paddingBottom: 36 }}>
        <Text variant="displayMedium">Новини за {new Date().toLocaleDateString()}</Text>
        <Text variant="headlineSmall">Кількість: {news?.totalResults}</Text>
        <Button title={"Оновити список"} onPress={handleUpdateNews} />
      </View>
      <View style={{ display: "flex", flexDirection: "column", gap: 16, paddingHorizontal: 6 }}>
        {
          news?.articles.map((value, index) => (
            <Card key={index}>
              <Card.Title title={"Автор: " + value.author}
                          subtitle={"Дата: " + new Date(value.publishedAt).toLocaleDateString()} />
              {
                value.urlToImage ? <Card.Cover source={{ uri: value.urlToImage }} /> : null
              }
              <Card.Content>
                <Text variant="titleLarge">{value.title}</Text>
                <Text variant="bodyMedium">{value.description}</Text>
              </Card.Content>

              <Card.Actions style={{ width: "100%" }}>
                <Button title={"Перейти до новин"} onPress={() => Linking.openURL(value.url)} />
              </Card.Actions>
            </Card>))
        }
      </View>
    </ScrollView>
  );
}

export default LastNews;
