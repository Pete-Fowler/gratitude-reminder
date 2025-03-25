import { useState } from "react";
import {
    NativeSyntheticEvent,
    TextInputContentSizeChangeEventData,
} from "react-native";

interface IGratitudeDay {
    date: string;
    gratitudes: string[];
}

export default function useIndex() {
    const [currentGratitude, setCurrentGratitude] = useState("");
    const [gratitudes, setGratitudes] = useState<IGratitudeDay[]>([]);
    const [inputHeight, setInputHeight] = useState<number>();

    const updateInputHeight = (
        event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>
    ) => {
        const { height } = event.nativeEvent.contentSize;
        const newHeight = Math.max(inputHeight ?? 0, height);
        setInputHeight(newHeight);
    };

    const saveGratitude = async () => {
        if (!currentGratitude) return;

        const today = new Date().toISOString().split("T")[0]; // Get YYYY-MM-DD

        setGratitudes((prevGratitudes) => {
            const updatedGratitudes = [...prevGratitudes];

            const existingEntry = updatedGratitudes.find(
                (entry) => entry.date === today
            );

            if (existingEntry) {
                existingEntry.gratitudes.push(currentGratitude);
            } else {
                updatedGratitudes.push({
                    date: today,
                    gratitudes: [currentGratitude],
                });
            }

            // Sort dates in descending order
            updatedGratitudes.sort((a, b) => (a.date > b.date ? -1 : 1));

            return updatedGratitudes;
        });

        setCurrentGratitude("");

        //    try {
        //        await AsyncStorage.setItem("gratitudes", JSON.stringify(gratitudes));
        //    } catch (error) {
        //        console.error("Failed to save gratitude:", error);
        //    }
    };

    return {
        currentGratitude,
        setCurrentGratitude,
        gratitudes,
        setGratitudes,
        inputHeight,
        setInputHeight,
        updateInputHeight,
        saveGratitude,
    };
}
