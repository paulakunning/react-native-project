import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>To do</Text>
      </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 30,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: "#68A691"
    }
})