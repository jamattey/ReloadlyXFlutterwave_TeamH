import React from "react";
import { useEffect, useState } from "react";


// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import Screen from "./app/components/Screen";
// import Icon from "./app/components/Icon";
// import ListItem from "./app/components/ListItem";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";

// export default function App() {
//   return <ListingsScreen />;
// }

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { label: "Plastics", value: 1 },
  { label: "Metals", value: 2 },
  { label: "Paper", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
