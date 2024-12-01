import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex-1 flex-row justify-center items-center rounded-full ${focused ? "" : "bg-transparent"}`}
  >
    <View
      className={`rounded-full w-14 h-14 items-center shadow-none justify-center ${focused ? "bg-[#2B4F60]" : ""}`}
    >
      <Image
        source={source}
        tintColor={focused ? "#FFAB73" : "#B0B7C3"}
        resizeMode="contain"
        className="w-8 h-8"
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "transparent",
        tabBarInactiveTintColor: "transparent",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F0F4F8",
          borderColor: "#007B83",
          borderWidth: 1,
          borderRadius: 25,
          paddingBottom: 25,
          overflow: "hidden",
          marginHorizontal: 25,
          marginBottom: 25,
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          pointerEvents: "auto",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.collection} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.notification} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
