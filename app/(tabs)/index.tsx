import { StyleSheet } from "react-native";
import { useState } from "react";
import { Text, ScrollView, TextInput, View } from "@/components/Themed";

import AppStyles from "@/constants/Styles";

export default function Gratitude() {
    const [gratitudes, setGratitudes] = useState<string[]>(["", "", ""]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>
                    What's Good? What are you greatful for?
                </Text>
                {gratitudes.map((g, i) => (
                    <View key={i} style={styles.inputBox}>
                        <Text style={styles.inputNumber}>{i + 1}.</Text>{" "}
                        <TextInput key={i} style={styles.input} multiline />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
    },
    inputNumber: {
        fontSize: 20,
        marginRight: 10,
    },
    input: {
        minHeight: 30,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: "top",
    },
    inputBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBlock: 20,
    },
});
