import React from "react";
import { Button, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

function AboutDepartment() {
  return (
    <ScrollView style={{
      paddingHorizontal: 16,
      marginVertical: 30
    }}>
      <Text variant="headlineLarge">Про кафедру</Text>
      <Text style={{ marginBottom: 16 }} variant="headlineMedium">Кафедра «Програмне забезпечення автоматизованих
        систем»</Text>
      <Text variant="headlineSmall">
        Кафедра «Програмного забезпечення автоматизованих систем» створена у 1998 році в результаті реорганізації
        кафедри «Обчислювальної техніки» та організації факультету ФІТІС, якому вона належить. Кафедра є випусковою зі
        спеціальності 121– «Інженерія програмногозабезпечення».</Text>
      <Text variant="headlineSmall">Інженерія програмного забезпечення – це дисципліна, яка пов’язана зі всіма аспектами
        виробництва програмного забезпечення від початкових стадій створення специфікації до підтримки системи після
        здачі в експлуатацію.</Text>

      <Text variant="headlineSmall"> Освіта в сфері інженерії програмного забезпечення – це розумна інвестиція у своє
        майбутнє. У нас Ви навчитеся не просто програмувати (кодувати), а створювати програмні продукти – аналізувати
        вимоги, працювати в командні розробників, тестувати та забезпечувати якість продукту, керувати програмними
        проектами.</Text>
      <Text variant="headlineSmall">Кінець. Розходимось дітки!</Text>
    </ScrollView>
  );
}

export default AboutDepartment;
