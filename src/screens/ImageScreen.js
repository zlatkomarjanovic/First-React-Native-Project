import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail title='Forest' />
			<ImageDetail title='Forest' />
			<ImageDetail title='Forest' />
			<ImageDetail title='Forest' />
		</View>
	);
};

export default ImageScreen;
const styles = StyleSheet.create({});
