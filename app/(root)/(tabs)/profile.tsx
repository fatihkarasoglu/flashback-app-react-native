import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-2xl text-red-600">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
