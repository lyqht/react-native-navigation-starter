
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation"

// interface propTypes {
// 	componentId: string
// }
interface Props { componentId: string };
interface State { value: string }
interface Options {
	topBar: {
		rightButtons: [
			{
				id: 'addPost',
				text: 'Add'
			}
		]
	}
}

class PostsList extends Component<Props, State, Options> {
	constructor(props: Props) {
		super(props)
		Navigation.events().bindComponent(this)
	}


	navigationButtonPressed = (buttonId: string) => {
		alert(buttonId);
	}

	pushViewPostScreen = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'demo.ViewPost',
				passProps: {
					somePropToPass: 'Some props that we are passing'
				},
				options: {
					topBar: {
						title: {
							text: 'Post1'
						}
					}
				}
			}
		});
	}




	render() {
		return (
			<View style={styles.container} >
				<Text onPress={this.pushViewPostScreen} style={styles.text}>PostsList Screen</Text>
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
