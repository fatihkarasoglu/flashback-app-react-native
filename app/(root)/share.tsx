import { Button, Text, TouchableOpacity, Image, Keyboard } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import InputField from "@/components/InputField";

const Share = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleShare = () => {
    console.log("Paylaşım İçeriği:", content);
    console.log("Seçilen Fotoğraf:", image);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FFFBEA] p-4">
      <Text className="text-lg text-[#5D4037] mb-4">Yeni Paylaşım</Text>
      <InputField
        className="border border-[#FFD700] rounded-lg p-2 mb-4 text-[#5D4037]"
        placeholder="Bir şeyler yazın..."
        placeholderTextColor="#BDBDBD"
        value={content}
        onChangeText={setContent}
        onPress={Keyboard.dismiss}
        label=""
      />
      {image && (
        <Image
          source={{ uri: image }}
          className="w-full h-40 mb-4 rounded-lg"
        />
      )}
      <TouchableOpacity
        className="bg-[#FFD700] rounded-lg px-6 py-3 mb-4"
        onPress={pickImage}
      >
        <Text className="text-[#5D4037]">Fotoğraf Ekle</Text>
      </TouchableOpacity>
      <Button title="Paylaş" color="#5D4037" onPress={handleShare} />
    </SafeAreaView>
  );
};

export default Share;
