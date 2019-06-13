
import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from "react-native-mol-design-system";
import { Navigation } from "react-native-navigation";
import { connect } from 'react-redux';
import { pushViewPostScreen, showAddPostModal } from "../screens";
import { fetchPost } from './posts.actions';

interface Props {
	componentId: string,
	fetchPost(): any,
	posts?: any[],
}
interface State {
	posts: any[]
}
interface NavProps {
	buttonId: string
}

class PostsList extends PureComponent<Props, State> {
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
	componentDidMount() {
		this.props.fetchPost()
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
				<Text.H2>Posts Screen</Text.H2>
				<Button onPress={() => pushViewPostScreen(this.props.componentId)} title="Hello" />
				<Text.H3>{JSON.stringify(this.props.posts)}</Text.H3>
			</View>
		);
	}
}

const mapStateToProps = (state: State) => {
	return {
		posts: state.posts
	};
}

export default connect(mapStateToProps, { fetchPost })(PostsList);

// export default PostsList;

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

