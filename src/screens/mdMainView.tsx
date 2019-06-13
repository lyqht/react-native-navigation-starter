import React, { PureComponent } from 'react'
import { Accordion, Scrollview, Text } from "react-native-mol-design-system"
import { Navigation } from "react-native-navigation";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview';

// need help with importing markdown files
// import Markdown from 'react-native-markdown-renderer';

const componentsDetails = require('../components.json')

interface Props {
	componentId: string,
	fetchPost(): any,
	posts?: any[],
}
interface State {
	components: any[]
}

class MarkdownMainView extends PureComponent<Props, State> {
	static options = () => {
		return {
			topBar: {
				rightButtons: [
					{
						id: 'configureThemeButton',
						text: 'Theme'
					}
				]
			}
		}
	}

	constructor(props: Props) {
		super(props)
		this.state = {
			components: componentsDetails
		}
		Navigation.events().bindComponent(this);
	}
	render() {
		return (
			<Scrollview style={{ flex: 1, flexDirection: "column" }}>
				{this.state.components.map((item: any, index: number) => {
					return (
						<View key={index} style={{ flex: 1 }}>
							<Accordion
								title={item.name}
								collapsed={true}>
								<WebView
									originWhitelist={['*']}
									style={{ flex: 1, height: 500 }}
									scalesPageToFit={true}
									source={{ uri: "https://wix.github.io/react-native-navigation/#/docs/app-launch" }}
								/>
							</Accordion>
						</View>
					)
				})}
			</Scrollview>
		);
	}
}

export default MarkdownMainView
