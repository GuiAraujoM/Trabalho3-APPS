import * as React from "react";
import { AuthContext } from "../Contexts/Auth/Auth";
import { View } from "react-native";

import {
  TweetProfilePhotoContainer,
  TweetImage,
} from "../Components/Home/TweetStyles";
import { Button, TextInput } from "react-native-paper";
import ImagePickerComponent from "../Components/ImagePickerComponent";
import { createPosts } from "../Apis/Posts";

export default function PostScreen({ navigation }) {
  const { user } = React.useContext(AuthContext);

  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitleContainerStyle: { display: "none" },
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "white",
      headerRight: () => (
        <Button
          compact={true}
          labelStyle={{ fontWeight: "bold", color: "white" }}
          mode="contained"
          buttonColor="#1d9bf0"
          style={{ width: 130, height: 35, marginHorizontal: 10 }}
          onPress={() => handlePostButtonPress()}
        >
          Publicar
        </Button>
      ),
    });
  }, [text]);

  const handlePostButtonPress = async () => {
    try {
        console.log(image)
        await createPosts(text, image, user.email); 
        navigation.navigate("MainScreen");    
    } catch (error) {
        alert('Erro');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 25 }}>
      <View>
        <View>
          <TweetProfilePhotoContainer style={{ height: 25, width: 25 }}>
            <TweetImage source={user.profileimage}></TweetImage>
          </TweetProfilePhotoContainer>
        </View>
      </View>
      <TextInput
        label=""
        mode="outlined"
        value={text}
        onChangeText={setText}
        textColor={"#71767b"}
        placeholderTextColor={"#71767b"}
        activeOutlineColor={"#1d9bf0"}
        style={{
          backgroundColor: "black",
          marginVertical: 20,
        }}
        multiline={true}
        numberOfLines={25}
      />
      <View>
        <ImagePickerComponent
          getImage={() => {
            return image;
          }}
          setImage={setImage}
          label={"Imagem"}
        ></ImagePickerComponent>
      </View>
    </View>
  );
}
