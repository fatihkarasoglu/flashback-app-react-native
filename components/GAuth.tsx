import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const GAuth = () => {
  const handleGoogleSignUp = async () => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Ya da</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Google ile Giriş Yap"
        className="w-full mt-2 shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignUp}
        disabled
      />
    </View>
  );
};

export default GAuth;
