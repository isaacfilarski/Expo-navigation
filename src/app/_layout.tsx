import React from "react";
import { View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs initialRouteName="agenda">
        <Tabs.Screen
          name="agenda"
          options={{
            tabBarLabel: "Agenda",
          }}
        />
        <Tabs.Screen
          name="clients"
          options={{
            tabBarLabel: "Clients",
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            tabBarLabel: "More",
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
