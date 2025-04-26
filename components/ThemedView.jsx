import { View, Image, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../assets/img/book-logo.png";

const ThemedView = ({ style, safe = false, showLogo = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: safe ? insets.top : 0,
          paddingBottom: safe ? insets.bottom : 0,
          alignItems: "center", // Center the logo
        },
        style,
      ]}
      {...props}
    >
      {showLogo && (
        <Image
          source={Logo}
          style={{
            marginVertical: 20,
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
        />
      )}
      {props.children}
    </View>
  );
};

export default ThemedView;
