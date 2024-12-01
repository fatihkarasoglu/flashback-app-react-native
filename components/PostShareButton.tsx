import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PostShareButton = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  // Fotoğraf seçme işlemi
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
    <View className="flex-1 bg-[#FFFBEA] p-4">
      <Text className="text-lg text-[#5D4037] mb-4">Paylaşımınızı Girin:</Text>
      <TextInput
        className="border border-[#FFD700] rounded-lg p-2 mb-4 text-[#5D4037]"
        placeholder="Bir şeyler yazın..."
        placeholderTextColor="#BDBDBD"
        value={content}
        onChangeText={setContent}
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
    </View>
  );
};

export default PostShareButton;
