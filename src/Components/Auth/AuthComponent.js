import * as React from "react";
import { View, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { AuthContainer, Title } from "./AuthStyles";
import twitterLogo from "../../../assets/twitterlogo.png";
import { TweetImage, TweetProfilePhotoContainer } from "../Home/TweetStyles";
import { validateUserEmail } from "../../Apis/Users";
import ImagePickerComponent  from "../ImagePickerComponent";

import { AuthContext } from "../../Contexts/Auth/Auth";

export default function AuthComponent() {
 const [email, setEmail] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [username, setUsername] = React.useState("");
 const [image, setImage] = React.useState("");
 const [invalidEmail, setInvalidEmail] = React.useState(false); 
 const [showPasswordField, setshowPasswordField] = React.useState(false);
 const [register, setRegister] = React.useState(false);
 const [disabled, setDisabled] = React.useState(false);
 const [registerError, setRegisterError] = React.useState(false);
 

  const { signIn, signUp } = React.useContext(AuthContext);

 const validateEmail = async () => {
  console.log('validando email')
  const result = await validateUserEmail(email);
  if(result.exists == false){
    setInvalidEmail(true);
  }else{
    setshowPasswordField(true);
    setInvalidEmail(false);
  }
  console.log(result)
 };

  const trySignUp = async () => {
    setDisabled(true);
    await signUp(email, password, username, image);
    setDisabled(false);
    setRegisterError(true);
  }

 return (
   <View style={{ flex: 1, backgroundColor: "black" }}>
     <View>
       <TweetProfilePhotoContainer
         style={{ height: 25, width: 25, margin: "auto", marginTop: 15 }}
       >
         <TweetImage source={twitterLogo}></TweetImage>
       </TweetProfilePhotoContainer>
     </View>
     <AuthContainer>
       {register ? (
         <View>
           <View style={{ height: 72 }}>
             <Title style={{ color: "white" }}>Criar sua conta</Title>
             <TextInput
               label="E-mail"
               mode="outlined"
               disabled={disabled}
               value={email}
               onChangeText={(email) => setEmail(email)}
               textColor={"#71767b"}
               placeholderTextColor={"#71767b"}
               activeOutlineColor={"#1d9bf0"}
               style={{
                 backgroundColor: "black",
               }}
             />
             <TextInput
               label="Username"
               mode="outlined"
               disabled={disabled}
               value={username}
               onChangeText={(username) => setUsername(username)}
               textColor={"#71767b"}
               placeholderTextColor={"#71767b"}
               activeOutlineColor={"#1d9bf0"}
               style={{
                 backgroundColor: "black",
               }}
             />
             <TextInput
               label="Senha"
               mode="outlined"
               disabled={disabled}
               value={password}
               onChangeText={(password) => setPassword(password)}
               textColor={"#71767b"}
               placeholderTextColor={"#71767b"}
               activeOutlineColor={"#1d9bf0"}
               style={{
                 backgroundColor: "black",
               }}
               secureTextEntry={true}
             />
             <View>
               <ImagePickerComponent
                 getImage={() => {
                   return image;
                 }}
                 setImage={setImage}
                 label={"Imagem de perfil"}
               ></ImagePickerComponent>
             </View>
             <View style={{ marginTop: 20 }}>
               <Button
                 mode="contained"
                 onPress={() => trySignUp()}
                 buttonColor="white"
                 textColor="black"
                 labelStyle={{ fontWeight: 700 }}
                 disabled={disabled}
               >
                 Avançar
               </Button>
             </View>
             {registerError ? (
               <View
                 style={{
                   backgroundColor: "#1d9bf0",
                   height: 40,
                   marginTop: 40,
                 }}
               >
                 <Text style={{ fontSize: 14, margin: 5 }}>
                   Desculpe, mas houve um problema ao tentar cadastrar sua
                   conta.
                 </Text>
               </View>
             ) : (
               <View></View>
             )}
           </View>
         </View>
       ) : (
         <View>
           {showPasswordField ? (
             <View>
               <View style={{ height: 72 }}>
                 <Title style={{ color: "white" }}>Digite sua senha</Title>
               </View>
               <TextInput
                 label="Senha"
                 mode="outlined"
                 value={password}
                 onChangeText={(password) => setPassword(password)}
                 textColor={"#71767b"}
                 placeholderTextColor={"#71767b"}
                 activeOutlineColor={"#1d9bf0"}
                 style={{
                   backgroundColor: "black",
                 }}
                 secureTextEntry={true}
               />
               <View style={{ marginTop: 20 }}>
                 <Button
                   mode="contained"
                   onPress={() => signIn(email, password)}
                   buttonColor="white"
                   textColor="black"
                   labelStyle={{ fontWeight: 700 }}
                 >
                   Entrar
                 </Button>
               </View>
             </View>
           ) : (
             <View>
               <View style={{ height: 72 }}>
                 <Title style={{ color: "white" }}>Entrar no X</Title>
               </View>
               <TextInput
                 label="Celular, e-mail ou nome de usuário"
                 mode="outlined"
                 value={email}
                 onChangeText={(email) => setEmail(email)}
                 textColor={"#71767b"}
                 placeholderTextColor={"#71767b"}
                 activeOutlineColor={"#1d9bf0"}
                 style={{
                   backgroundColor: "black",
                 }}
               />

               <View style={{ marginTop: 20 }}>
                 <Button
                   mode="contained"
                   onPress={validateEmail}
                   buttonColor="white"
                   textColor="black"
                   labelStyle={{ fontWeight: 700 }}
                 >
                   Avançar
                 </Button>
               </View>

               <View style={{ marginTop: 20 }}>
                 <Button
                   mode="outlined"
                   onPress={() => console.log("Clicou Esqueceu sua senha")}
                   buttonColor="black"
                   textColor="white"
                   labelStyle={{ fontWeight: 700 }}
                 >
                   Esqueceu sua senha?
                 </Button>
               </View>

               <View style={{ display: "inline", marginTop: 20 }}>
                 <Text>Não tem uma conta? </Text>
                 <View style={{ display: "inline-flex" }}>
                   <Button
                     mode="text"
                     onPress={() => setRegister(true)}
                     textColor="#1d9bf0"
                     labelStyle={{ fontWeight: 700 }}
                   >
                     Inscreva-se
                   </Button>
                 </View>
               </View>
             </View>
           )}
         </View>
       )}
     </AuthContainer>
     {invalidEmail ? (
       <View
         style={{
           backgroundColor: "#1d9bf0",
           display: "absolute",
           bottom: 0,
           height: 40,
         }}
       >
         <Text style={{ fontSize: 14, margin: 10 }}>
           Desculpe, mas não encontramos sua conta.
         </Text>
       </View>
     ) : (
       <View></View>
     )}
   </View>
 );
}
