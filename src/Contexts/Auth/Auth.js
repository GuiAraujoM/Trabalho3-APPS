import { createContext, useState } from "react";
import api from "../../Apis/Api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser({ email });
    //api.defaults.headers.authorization = `Bearer ${email}`;

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      const { user, token } = response.data;

      api.defaults.headers.authorization = token;
      setUser(user);

      setIsLogged(true);
    } catch (error) {
      console.log("ERRO AO FAZER LOGIN ");
    }
  };

  const signOut = (navigation) => {
    setUser(null);
    setIsLogged(false);
    navigation.navigate("AuthScreen"); 
  };

  const signUp = async (email, password, username, profileimage) => {
    try {
      const response = await api.post("/auth/register", {
        email,
        password,
        username,
        profileimage,
      });

      const { user, token } = response.data;

      api.defaults.headers.authorization = token;
      setUser(user);

      setIsLogged(true);
    } catch (error) {
      console.log("ERRO AO CADASTRAR ");
    }
  };

  return (
    <AuthContext.Provider
      value={{ email: null, isLogged, user, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
