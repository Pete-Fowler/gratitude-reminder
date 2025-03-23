import {
    Pressable,
    type NativeSyntheticEvent,
    StyleSheet,
    type TextInputContentSizeChangeEventData,
} from "react-native";
import { useEffect, useState } from "react";
import {
    Text,
    ScrollView,
    TextInput,
    View,
    useThemeColor,
} from "@/components/Themed";
import AntDesign from "@expo/vector-icons/AntDesign";

import AppStyles from "@/constants/Styles";

export default function Gratitude() {
    const [currentGratitude, setCurrentGratitude] = useState("");
    const [gratitudes, setGratitudes] = useState<string[]>([]);
    const [inputHeight, setInputHeight] = useState<number>();

    const updateInputHeight = (
        event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
    ) => {
        const { height } = event.nativeEvent.contentSize;
        const newHeight = Math.max(inputHeight ?? 0, height);
        setInputHeight(newHeight);
    };

    const saveGratitude = () => {
        if (currentGratitude) {
            setGratitudes([...gratitudes, currentGratitude]);
            setCurrentGratitude("");

            // save to as
        }
    };

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
                style={[styles.input, { height: inputHeight }]}
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
                    size={24}
                    color={useThemeColor({}, "tint")}
                />
            </Pressable>
            <ScrollView>
                {gratitudes.map((g, i) => (
                    <View key={i} style={styles.inputBox}>
                        <Text style={styles.inputNumber}>{i + 1}.</Text>
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
        marginBlock: 20,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: "top",
    },
    inputBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    button: {
        marginTop: 0,
        // backgroundColor: AppStyles.
    },
});
