import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	Touchable,
} from 'react-native';

const HomeScreen = (props) => {
	console.log(props);
	return (
		<View>
			<Text style={styles.text}>Kurchinaaa</Text>
			<Button
				title='Go to Components Demo'
				onPress={() => props.navigation.navigate('Components')}
			/>
			<TouchableOpacity>
				<Text>Go to List Demo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
