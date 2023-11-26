import {
  TweetProfilePhotoContainer,
  TweetImage
} from "./TweetStyles";
import { Image, View, StyleSheet, Text } from "react-native";

import twitterLogo from "../../../assets/twitterlogo.png";

export default function CustomTitle() {
  return (
    <View>
      <TweetProfilePhotoContainer
        style={{ height: 20, width: 20 }}
      >
        <TweetImage source={twitterLogo}></TweetImage>
      </TweetProfilePhotoContainer>
    </View>
  );
}