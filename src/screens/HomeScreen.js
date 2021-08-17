import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	Touchable,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Kurchinaaa</Text>
			<Button
				title='Go to Components Demo'
				onPress={() => navigation.navigate('Components')}
			/>
			<Button
				onPress={() => navigation.navigate('List')}
				title='Go to List Demo'
			/>
			<Button
				onPress={() => navigation.navigate('Image')}
				title='Go to Image Screen'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
