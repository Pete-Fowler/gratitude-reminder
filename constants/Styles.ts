import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    paragraph: {
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 24,
    },
    link: {
        color: "#1B95E0",
        textDecorationLine: "underline",
    },
});

export default appStyles;
