import { useEffect, useState } from "react";

import TweetCard from "./TweetCard";
import { TweetListContainer } from "./TweetStyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, MD3Colors } from "react-native-paper";
import { View, Text } from "react-native";

import { fetchPosts } from "../../Apis/Posts";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(await fetchPosts());
      } catch (error) {
        console.log("Erro ao tentar listar posts");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refetchData = async () =>{
    try {
      setLoading(true);
      setData(await fetchPosts());
    } catch (error) {
      console.log("Erro ao tentar listar posts");
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  return (
    <ScrollView>
      {loading ? (
        <TweetListContainer></TweetListContainer>
      ) : (
        <View style={{ flex: 1 }}>
          <TweetListContainer style={{ backgroundColor: "black" }}>
            <TouchableOpacity onPress={refetchData}>
              <Text style={{ color: "white", textAlign: "center" }}>
                Recarregar
              </Text>
            </TouchableOpacity>
            {data.map((post, index) => (
              <TweetCard post={post} key={index}></TweetCard>
            ))}
          </TweetListContainer>
          <View style={{ flex: 1 }}>
            <IconButton
              icon="plus"
              mode="contained-tonal"
              containerColor="#1d9bf0"
              iconColor="white"
              style={{
                position: "fixed",
                right: 0,
                bottom: 0,
                margin: 20,
              }}
              onPress={() => navigation.navigate("PostScreen")}
            ></IconButton>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
