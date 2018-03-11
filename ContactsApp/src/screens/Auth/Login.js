import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import HRBtn from "../../UI/HRButtons/HRBtn";
import startTabs from "../MainTabs/startMainTabs";

class AuthScreen extends React.Component {
	state = {
		email: "",
		password: "",
		message: ""
	};

	verification = () => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(String(this.state.email).toLowerCase())) {
			startTabs();
		} else if (this.state.password === "" || this.state.email === "") {
			this.setState({ message: "Veuillez remplir tout les champs" });
		} else {
			this.setState({ message: "Entrez une addresse mail valide" });
		}
	};
	displayMessage = () => {
		if (this.state.message === "") {
			return null;
		}
		return <Text style={{ color: "red" }}>{this.state.message}</Text>;
	};
	goToCreateAccount = () => {
		this.props.navigator.push({
			screen: "ContactsApp.SignUpScreen"
		});
	};
	render() {
		return (
			<View style={{ alignItems: "center" }}>
				<TextInput
					autoCapitalize={false}
					autoCorrect={false}
					keyboardType="email-address"
					style={{ width: "80%", height: 80 }}
					onChangeText={text => this.setState({ email: text })}
					placeholder="Email"
					value={this.state.email}
				/>
				<TextInput
					autoCapitalize={false}
					autoCorrect={false}
					secureTextEntry
					style={{ width: "80%", height: 80, marginBottom: 20 }}
					onChangeText={text => this.setState({ password: text })}
					placeholder="Mot de passe"
					value={this.state.password}
				/>
				{this.displayMessage()}
				<HRBtn large onPress={this.verification}>
					Se connecter
				</HRBtn>
				<TouchableOpacity onPress={this.goToCreateAccount}>
					<Text style={{ fontSize: 18, color: "#328FFE" }}>
						Creer un compte
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default AuthScreen;
