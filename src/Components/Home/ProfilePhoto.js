import {
  TweetProfilePhotoContainer,
  TweetImage
} from "./TweetStyles";

import { View } from "react-native";

import profilePhoto from "../../../assets/profile_photo1_400x400.jpg";

export default function ProfilePhoto(props) {
  return (
    <View>
      <TweetProfilePhotoContainer style={{margin: 10}}>
        <TweetImage source={props.image} borderRadius="50%"></TweetImage>
      </TweetProfilePhotoContainer>
    </View>
  );
}