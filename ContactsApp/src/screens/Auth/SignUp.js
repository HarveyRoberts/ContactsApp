import React from "react";
import { View, TextInput, Text } from "react-native";
import HRBtn from "../../UI/HRButtons/HRBtn";
import startTabs from "../MainTabs/startMainTabs";

class AuthScreen extends React.Component {
	state = {
		email: "",
		password: "",
		confirmPassword: "",
		message: ""
	};

	verification = () => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (
			re.test(String(this.state.email).toLowerCase()) &&
			this.state.password === this.state.confirmPassword
		) {
			startTabs();
		} else if (
			this.state.password === "" ||
			this.state.email === "" ||
			this.state.confirmPassword === ""
		) {
			this.setState({ message: "Veuillez remplir tout les champs" });
		} else if (this.state.password !== this.state.confirmPassword) {
			this.setState({ message: "Les 2 mots de passes ne correspondent pas" });
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
			screen: "ContactsApp.OptionsScreen"
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
					style={{ width: "80%", height: 80, marginBottom: 20 }}
					onChangeText={text => this.setState({ password: text })}
					secureTextEntry
					placeholder="Mot de passe"
					value={this.state.password}
				/>
				<TextInput
					autoCapitalize={false}
					autoCorrect={false}
					style={{ width: "80%", height: 80, marginBottom: 20 }}
					secureTextEntry
					onChangeText={text => this.setState({ confirmPassword: text })}
					placeholder="Confirmer mot de passe"
					value={this.state.confirmPassword}
				/>
				{this.displayMessage()}
				<HRBtn large onPress={this.verification}>
					Creer un compte
				</HRBtn>
			</View>
		);
	}
}

export default AuthScreen;
