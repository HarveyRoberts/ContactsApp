import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	ScrollView,
	Image,
	TextInput,
	Dimensions
} from "react-native";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { deleteContact } from "../../store/actions";
import HRBtn from "../../UI/HRButtons/HRBtn";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

class ContactDetail extends React.Component {
	state = {
		focusLocation: {
			longitude: 37.7900352,
			latitude: -122.4013726,
			longitudeDelta: 0.0122,
			latitudeDelta: (SCREEN_WIDTH / SCREEN_HEIGHT) * 0.0122
		}
	};

	onDeleteContact = () => {
		this.props.onDeleteContact(this.props.id);
		this.props.navigator.pop({
			animated: true, // does the pop have transition animation or does it happen immediately (optional)
			animationType: "fade" // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
		});
	};
	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={{ paddingTop: 22, alignItems: "center" }}>
					<View
						style={{
							flexDirection: "row",
							width: "90%",
							justifyContent: "flex-end"
						}}
					>
						<FlatList
							style={{ flex: 1 }}
							data={this.props.images}
							renderItem={image => (
								<Image
									style={{ height: 150, width: 150, alignSelf: "flex-end" }}
									source={{ uri: image.item }}
								/>
							)}
						/>
						<View style={{ justifyContent: "center" }}>
							<TouchableOpacity style={styles.addPhotoIcon}>
								<Icon name="plus" size={35} color="white" />
							</TouchableOpacity>
						</View>
					</View>
					<Text style={{ fontSize: 25, marginTop: 15 }}>
						{this.props.firstname + " " + this.props.surname}
					</Text>
					<Text style={{ fontSize: 20 }}>{this.props.email}</Text>
					<Text style={{ fontSize: 20 }}>{this.props.mobilePhone}</Text>
					<Text style={{ fontSize: 20 }}>{this.props.homePhone}</Text>
					<Text style={{ fontSize: 20 }}>{this.props.dateOfBirth}</Text>
					<Text style={{ fontSize: 20 }}>{this.props.address}</Text>
					<MapView
						initialRegion={this.state.focusLocation}
						style={styles.map}
					/>
					<HRBtn
						large
						bgColor="#ff4444"
						width={"80%"}
						onPress={() => this.onDeleteContact()}
					>
						Supprimer Le Contact
					</HRBtn>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	addPhotoIcon: {
		justifyContent: "center",
		alignItems: "center",
		margin: 30,
		backgroundColor: "#00AEFF",
		borderRadius: 500,
		height: 50,
		width: 50
	},
	map: {
		height: 250,
		width: "100%",
		marginTop: 20,
		marginBottom: 20
	}
});

const mapDispatchToProps = dispatch => {
	return {
		onDeleteContact: id => dispatch(deleteContact(id))
	};
};

export default connect(null, mapDispatchToProps)(ContactDetail);
