
import React, { Component } from 'react';
import { pushViewPostScreen, showAddPostModal } from "../../screens"
import { View, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation"
import { Text, Button, Slider } from "react-native-mol-design-system"

interface Props { componentId: string };
interface State { }
interface NavProps {
	buttonId: string
}

class PostsList extends Component<Props, State> {
	static options = () => {
		return {
			topBar: {
				rightButtons: [
					{
						id: 'addPost',
						text: 'Add'
					}
				]
			}
		}
	}

	constructor(props: Props) {
		super(props)
		Navigation.events().bindComponent(this);
	}
	// left buttons on Android only support icons
	navigationButtonPressed = ({ buttonId }: NavProps) => {
		if (buttonId === 'addPost') showAddPostModal()
	}

	render() {
		return (
			<View style={styles.container} >
				<Text.H2>Posts Screen </Text.H2>
				<Button onPress={() => pushViewPostScreen(this.props.componentId)} title="Hello" />
				<Slider measurementType="number" />
			</View>
		);
	}
}

export default PostsList;

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
