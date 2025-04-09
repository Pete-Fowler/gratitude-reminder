import type React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const iconSize = 30;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tintLighter,
                tabBarStyle: {
                    height: 70,
                    backgroundColor: Colors[colorScheme ?? "light"].background,
                },
                tabBarLabelStyle: {
                    fontFamily: "Lora-Regular",
                    fontSize: 18, 
                    fontWeight: "999",
                },
                tabBarIconStyle: {
                    marginBottom: 5,
                },
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Write Gratitude",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="book" size={iconSize} color={color} />
                    ),
                    //
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: "Review",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="code" size={iconSize} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
