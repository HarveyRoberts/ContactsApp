import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class DrawerScreen extends React.Component {
	deconnect = () => {
		this.props.navigator.push({
			screen: "ContactsApp.LoginScreen"
		});
	};

	render() {
		return (
			<View
				style={{
					backgroundColor: "white",
					flex: 1,
					width: "80%",
					alignItems: "center"
				}}
			>
				<TouchableOpacity
					style={{ marginTop: 50 }}
					onPress={() => this.deconnect()}
				>
					<Text style={{ fontSize: 20 }}>Deconnexion</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default DrawerScreen;
