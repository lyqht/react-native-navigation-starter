import React, { Component } from 'react';
import { Navigation } from "react-native-navigation"
import { View, Text, StyleSheet, TextInput } from 'react-native';

interface Props { componentId: string }
interface State { }
interface NavProps {
	buttonId: string
}

class AddPost extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		Navigation.events().bindComponent(this);
	}

	static options() {
		return {
			topBar: {
				title: {
					text: 'Add Post'
				},
				rightButtons: [{
					id: 'saveBtn',
					text: 'Save',
					enabled: false
				}],
				leftButtons: [{
					id: 'cancelBtn',
					icon: require('../../assets/x.png')
				}]
			}
		};
	}

	navigationButtonPressed({ buttonId }: NavProps) {
		if (buttonId === 'cancelBtn') {
			Navigation.dismissModal(this.props.componentId);
			console.log("Cancelling")
		} else if (buttonId === 'saveBtn') {
			Navigation.dismissModal(this.props.componentId);
			console.log("Saving")
		}
	}

	onChangeText = (text: string) => {
		Navigation.mergeOptions(this.props.componentId, {
			topBar: {
				rightButtons: [{
					id: 'saveBtn',
					text: 'Save',
					enabled: !!text
				}]
			}
		});
	}


	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Add Post Screen</Text>
				<TextInput
					placeholder="Helloo type here to enable save button"
					onChangeText={this.onChangeText}
				/>
			</View>
		);
	}
}

export default AddPost;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#D3EDFF',
	},
	text: {
		fontSize: 28,
		textAlign: 'center',
		margin: 10,
	}
});
