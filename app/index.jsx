import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

const Home = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>
                Home Page
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default Home