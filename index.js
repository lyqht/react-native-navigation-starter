import App from './App';
import { Navigation } from "react-native-navigation"
import { registerScreens } from "./src/screens"
// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => App);

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
						component: {
							name: 'demo.PostsList',
							options: {
								topBar: {
									title: {
										text: 'Demo'
									}
								}
							}
						}
					}
				],
			}
		}
	});
});
