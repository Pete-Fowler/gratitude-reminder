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
                What's Good? What are you greatful for?
            </Text>

            <TextInput
                style={[
                    styles.input,
                    {
                        height: inputHeight,
                        backgroundColor: "white",
                    },
                ]}
                value={currentGratitude}
                onChangeText={(text) => setCurrentGratitude(text)}
                onContentSizeChange={(e) => updateInputHeight(e)}
                multiline
            />
            <Pressable
                style={styles.button}
                accessibilityLabel="save gratitude"
                onPress={saveGratitude}
            >
                <AntDesign
                    name="pluscircle"
                    size={40}
                    color={useThemeColor({}, "tintTwo")}
                />
            </Pressable>

            <ScrollView>
                {gratitudes.map((day, i) => (
                    <View key={i}>
                        <Text>{day.date}</Text>
                        {day.gratitudes.map((gratitude, j) => (
                            <Text key={j}>
                                {j + 1}
                                {gratitude}
                            </Text>
                        ))}
                        <Text>-----------------</Text>
                        <Text>-----------------</Text>
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
        width: "100%",
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: "top",
    },
    inputBox: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        marginLeft: "auto",
        marginBlock: 2,
    },
});
