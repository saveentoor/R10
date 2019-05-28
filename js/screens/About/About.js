import React from "react";
import { Text, ScrollView, View, Image, FlatList } from "react-native";

import { styles } from "./styles";

const About = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.logo}>
          <Image source={require("../../assets/images/r10_logo.png")} />
        </View>
        <Text style={styles.h2}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.h1}>Date & Venue</Text>
        <Text style={styles.h2}>
          The R10 conference will take place on Tuesday, June 27, 2019 in
          Vancouver, BC.
        </Text>
        <Text style={styles.h1}>Code of Conduct</Text>
      </View>
      <FlatList
        style={styles.list}
        data={data.allConducts}
        renderItem={({ item }) => (
          <View style={styles.eachItem}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </ScrollView>
  );
};

export default About;
