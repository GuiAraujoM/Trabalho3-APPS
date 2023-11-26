import 'react-native-gesture-handler';
import { AppStackNavigation } from "./src/AppStackNavigation";
import { PaperProvider } from "react-native-paper";

import { AuthProvider } from "./src/Contexts/Auth/Auth";

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <AppStackNavigation />
      </PaperProvider>
    </AuthProvider>
  );
}