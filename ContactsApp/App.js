import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import LoginScreen from "./src/screens/Auth/Login";
import SignUpScreen from "./src/screens/Auth/SignUp";
import ContactsScreen from "./src/screens/Contacts/Contacts";
import ContactDetailScreen from "./src/screens/Contacts/ContactDetail";
import AddContactScreen from "./src/screens/Contacts/AddContact";
import OptionsScreen from "./src/screens/Options/Options";
import DrawerScreen from "./src/screens/Drawer/Drawer";
import configureStore from "./src/store/config";
//import configureRealm from "./src/realm/config";

const store = configureStore();
//configureRealm();

Navigation.registerComponent(
	"ContactsApp.LoginScreen",
	() => LoginScreen,
	store,
	Provider
);
Navigation.registerComponent(
	"ContactsApp.SignUpScreen",
	() => SignUpScreen,
	store,
	Provider
);
Navigation.registerComponent(
	"ContactsApp.ContactsScreen",
	() => ContactsScreen,
	store,
	Provider
);
Navigation.registerComponent(
	"ContactsApp.ContactDetailScreen",
	() => ContactDetailScreen,
	store,
	Provider
);
Navigation.registerComponent(
	"ContactsApp.AddContactScreen",
	() => AddContactScreen,
	store,
	Provider
);
Navigation.registerComponent(
	"ContactsApp.OptionsScreen",
	() => OptionsScreen,
	store,
	Provider
);
Navigation.registerComponent(
	"ContactsApp.DrawerScreen",
	() => DrawerScreen,
	store,
	Provider
);

Navigation.startSingleScreenApp({
	screen: {
		screen: "ContactsApp.LoginScreen", // unique ID registered with Navigation.registerScreen
		title: "Login" // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
	}
});
