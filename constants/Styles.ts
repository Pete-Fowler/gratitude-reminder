import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { useColorScheme } from "@/components/useColorScheme";


const AppStyles = () => {
    const colorScheme = useColorScheme();

    return StyleSheet.create({
        link: {
            color: Colors[colorScheme ?? "light"].tintLighter, // Use tintLighter from Colors
            textDecorationLine: "underline",
        },
    });
};

export default AppStyles;
