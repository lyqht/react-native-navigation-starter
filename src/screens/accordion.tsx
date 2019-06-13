export const accordionNotes = `
# Props
\`\``
interface Props {
	title: string;
	theme?: Theme;
	collapsed?: boolean;
	hasError?: boolean;
	testID?: string;
	accessibilityLabel?: string;
	selectorStyle?: StyleProp<ViewStyle>;
}
`\``
# State
\`\``
interface State {
	collapsed: boolean;
	selectorAnimation: Animated.Value;
}
`\``



	`
