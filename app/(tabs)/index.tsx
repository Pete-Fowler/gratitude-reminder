import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import AppStyles from "@/constants/Styles";

import { Text, View } from "@/components/Themed";
import { ExternalLink } from "@/components/ExternalLink";

export default function LandingScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Happiness Reminder</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={styles.paragraph}>
                A completely free, minimalist app. Set customizable reminders to
                practice gratitude. When the reminder goes off, write down
                things you're grateful for, or just go through them mentally.
            </Text>
            <Text style={styles.paragraph}>
                <ExternalLink
                    style={AppStyles.link}
                    href="https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier"
                >
                    Research
                </ExternalLink>{" "}
                has shown an association between gratitude and benefits such as
                increased well-being, optimism, and happiness.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginBlock: 10,
    },
});
