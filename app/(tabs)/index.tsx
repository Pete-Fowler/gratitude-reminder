import { Pressable, StyleSheet } from "react-native";
import {
    Text,
    ScrollView,
    TextInput,
    View,
    useThemeColor,
} from "@/components/Themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import useIndex from "../../components/customHooks/useIndex";

export default function Gratitude() {
    const {
        currentGratitude,
        setCurrentGratitude,
        gratitudes,
        updateInputHeight,
        inputHeight,
        saveGratitude,
    } = useIndex();

    return (
        <View style={styles.container}>
            <Text>
                {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </Text>
            <Text style={styles.header}>
                What are you grateful for?
            </Text>

            <TextInput
                style={[
                    styles.input,
                    {
                        height: inputHeight,
                    },
                ]}
                value={currentGratitude}
                onChangeText={(text) => setCurrentGratitude(text)}
                onContentSizeChange={(e) => updateInputHeight(e)}
                multiline
            />
            <Pressable
                accessibilityLabel="save gratitude"
                onPress={saveGratitude}
            >
                <AntDesign style={styles.button} name="pluscircle" size={40} />
            </Pressable>

            <ScrollView>
                {gratitudes.map((day, i) => (
                    <View key={i} style={styles.historyBox}>
                        <Text style={styles.date}>
                            {new Date(day.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </Text>
                        {day.gratitudes.map((gratitude, j) => (
                            <Text key={j}>
                                {j + 1}.{gratitude}
                            </Text>
                        ))}
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
        backgroundColor: useThemeColor({}, "tint"),
        width: "100%",
        border: "none",
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        textAlignVertical: "top",
    },
    historyBox: {
        backgroundColor: useThemeColor({}, "tint"),
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    button: {
        marginLeft: "auto",
        marginBlock: 2,
        color: useThemeColor({}, "tint"),
    },
    date: {
        fontSize: 16,
    },
});
