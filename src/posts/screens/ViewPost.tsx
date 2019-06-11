import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { popScreen } from '../../screens'

interface Props { componentId: string };
interface State { }

class PostsList extends Component<Props, State> {
	static options = () => {
		return {
			topBar: {
				rightButtons: [
					{
						id: 'deletePost',
						text: 'Delete'
					}
				]
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>ViewPost Screen</Text>
				<Button title="Delete Screen" onPress={() => popScreen(this.props.componentId)} />
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
