import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { icons } from "@/constants";
import { images } from "@/constants";

const Home = () => {
  const [liked, setLiked] = useState(0);
  const router = useRouter();
  const handleShareButton = () => {
    router.push("/(root)/share");
  };

  return (
    <SafeAreaView className="flex-1 h-full bg-[#F5F7FA]">
      <View className="flex flex-row justify-between px-10 items-center w-full h-[50px] pt-2">
        <Text className="text-xl font-UbuntuBold text-[#007B83]">
          Hoşgeldin, Kullanıcı 👋
        </Text>
        <TouchableOpacity
          onPress={handleShareButton}
          className="w-20 h-10 flex justify-center items-center bg-[#FFAB73] rounded-full"
        >
          <Image source={icons.post} className="w-5 h-5" tintColor="#3A3A3A" />
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1">
        <View className="flex flex-col px-5 bg-red-100 my-5 py-5">
          <View className="flex justify-center items-start text-center">
            <Text className="text-red-700 text-lg font-UbuntuRegular">
              Önemli:{" "}
              <Text className="text-red-500 text-lg font-UbuntuRegular">
                Bu uygulama frontend projesi kapsamında şimdilik test amaçlıdır.
                Yakında backend ile entegre olacaktır.
              </Text>
            </Text>
            <Text className="text-lg text-red-500 font-UbuntuRegular">
              İletişim için LinkedIn{" "}
              <Link
                href="https://www.linkedin.com/in/fatihkarasoglu/"
                className="text-xl underline text-red-700 font-UbuntuRegular"
              >
                Fatih Karaşoğlu
              </Link>
            </Text>
          </View>
        </View>
        <View className="flex-1 bg-[#F5F7FA]">
          <View
            className={`flex justify-center items-center my-5 shadow-[#D3D3D3] ${Platform.OS === "ios" ? "shadow-xl" : "elevation-2xl"}`}
          >
            <View className="w-11/12 h-[500px] rounded-lg overflow-hidden">
              <View className="flex h-[50px] flex-row justify-between items-center px-5 bg-[#FFFFFF]">
                <View className="flex flex-row items-center justify-center">
                  <TouchableOpacity>
                    <Image
                      source={images.defaultUser1}
                      className="w-10 h-10 rounded-full"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="left-2 text-xl font-UbuntuRegular text-[#3A3A3A]">
                      itsFatih
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity>
                    <Image
                      source={icons.other}
                      className="w-6 h-6"
                      tintColor="#3A3A3A"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="h-[400px]">
                <Image
                  source={images.testPost1}
                  className="w-full h-[400px]"
                  resizeMode="cover"
                />
              </View>

              <View className="h-[50px] flex flex-row justify-start items-center px-3 bg-[#FFFFFF]">
                <TouchableOpacity
                  onPress={() => setLiked(liked + 1)}
                  className="flex flex-row justify-center items-center"
                >
                  <Image
                    source={icons.heart}
                    className="w-7 h-7 -[#3A3A3A] text-[#3A3A3A]"
                    resizeMode="cover"
                    tintColor="#3A3A3A"
                  />
                  <Text className="text-2xl text-[#3A3A3A]">{liked}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="left-3">
                  <Image
                    source={icons.comment}
                    className="w-7 h-7"
                    resizeMode="cover"
                    tintColor="#3A3A3A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="flex justify-center items-center my-5 shadow-xl shadow-[#D3D3D3]">
            <View className="w-11/12 h-[500px] rounded-lg overflow-hidden">
              <View className="flex h-[50px] flex-row justify-between items-center px-5 bg-[#FFFFFF]">
                <View className="flex flex-row items-center justify-center">
                  <TouchableOpacity>
                    <Image
                      source={images.defaultUser1}
                      className="w-10 h-10 rounded-full"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="left-2 text-xl font-UbuntuRegular text-[#3A3A3A]">
                      default_cigarettesAfterSex
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity className="text-[#3A3A3A]">
                    <Image
                      source={icons.other}
                      className="w-6 h-6"
                      tintColor="#3A3A3A"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="h-[400px]">
                <Image
                  source={images.testPost2}
                  className="w-full h-[400px]"
                  resizeMode="cover"
                />
              </View>

              <View className="h-[50px] flex flex-row justify-start items-center px-3 bg-[#FFFFFF]">
                <TouchableOpacity
                  onPress={() => setLiked(liked + 1)}
                  className="flex flex-row justify-center items-center"
                >
                  <Image
                    source={icons.heart}
                    className="w-7 h-7 -[#3A3A3A] text-[#3A3A3A]"
                    resizeMode="cover"
                    tintColor="#3A3A3A"
                  />
                  <Text className="text-2xl text-[#3A3A3A]">{liked}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="left-3">
                  <Image
                    source={icons.comment}
                    className="w-7 h-7"
                    resizeMode="cover"
                    tintColor="#3A3A3A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="flex justify-center items-center my-5 shadow-xl shadow-[#D3D3D3]">
            <View className="w-11/12 h-[500px] rounded-lg  overflow-hidden">
              <View className="flex h-[50px] flex-row justify-between items-center px-5 bg-[#FFFFFF]">
                <View className="flex flex-row items-center justify-center">
                  <TouchableOpacity>
                    <Image
                      source={images.defaultUser1}
                      className="w-10 h-10 rounded-full"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="left-2 text-xl font-UbuntuRegular text-[#3A3A3A]">
                      default_w_wonka
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity>
                    <Image
                      source={icons.other}
                      className="w-6 h-6"
                      tintColor="#3A3A3A"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="h-[400px]">
                <Image
                  source={images.testPost3}
                  className="w-full h-[400px]"
                  resizeMode="cover"
                />
              </View>

              <View className="h-[50px] flex flex-row justify-start items-center px-3 bg-[#FFFFFF]">
                <TouchableOpacity
                  onPress={() => setLiked(liked + 1)}
                  className="flex flex-row justify-center items-center"
                >
                  <Image
                    source={icons.heart}
                    className="w-7 h-7 -[#3A3A3A] text-[#3A3A3A]"
                    resizeMode="cover"
                    tintColor="#3A3A3A"
                  />
                  <Text className="text-2xl text-[#3A3A3A]">{liked}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="left-3">
                  <Image
                    source={icons.comment}
                    className="w-7 h-7"
                    resizeMode="cover"
                    tintColor="#3A3A3A"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="flex justify-center items-center my-5 shadow-xl shadow-[#D3D3D3]">
            <View className="w-11/12 h-[500px] rounded-lg  overflow-hidden">
              <View className="flex h-[50px] flex-row justify-between items-center px-5 bg-[#FFFFFF]">
                <View className="flex flex-row items-center justify-center">
                  <TouchableOpacity>
                    <Image
                      source={images.defaultUser1}
                      className="w-10 h-10 rounded-full"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="left-2 text-xl font-UbuntuRegular text-[#3A3A3A]">
                      default_sauron
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity>
                    <Image
                      source={icons.other}
                      className="w-6 h-6"
                      tintColor="#3A3A3A"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="h-[400px]">
                <Image
                  source={images.testPost4}
                  className="w-full h-[400px]"
                  resizeMode="cover"
                />
              </View>

              <View className="h-[50px] flex flex-row justify-start items-center px-3 bg-[#FFFFFF]">
                <TouchableOpacity
                  onPress={() => setLiked(liked + 1)}
                  className="flex flex-row justify-center items-center"
                >
                  <Image
                    source={icons.heart}
                    className="w-7 h-7 -[#3A3A3A] text-[#3A3A3A]"
                    resizeMode="cover"
                    tintColor="#3A3A3A"
                  />
                  <Text className="text-2xl text-[#3A3A3A]">{liked}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="left-3">
                  <Image
                    source={icons.comment}
                    className="w-7 h-7"
                    tintColor="#3A3A3A"
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
