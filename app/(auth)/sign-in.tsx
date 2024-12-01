import { ScrollView, View, Text } from "react-native";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import GAuth from "@/components/GAuth";

const SignIn = () => {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px] flex items-center justify-center">
          <Text className="font-AgbalumoRegular text-5xl text-center text-[#00246B]">
            Flashback
          </Text>
          <Text className="text-2xl text-black font-UbuntuBold absolute bottom-5 left-5">
            Giriş Yapın
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label=""
            placeholder="E-mail"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setFrom({ ...form, email: value })}
          />
          <InputField
            label=""
            placeholder="Parola"
            icon={icons.key}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setFrom({ ...form, password: value })}
          />

          <CustomButton
            title="Giriş Yap"
            onPress={onSignInPress}
            className="mt-6 w-full"
            disabled
          />
          <Text className="text-base text-red-400 text-center">
            Lütfen şimdilik misafir girişini kullanın.
          </Text>
          <CustomButton
            title="Misafir Girişi"
            onPress={() => router.replace("/(root)/(tabs)/home")}
            className="w-full"
          />

          <GAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200"
          >
            <Text>Henüz bir hesabınız yok mu? </Text>
            <Text className="text-[#00246B]">Kayıt Ol</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
