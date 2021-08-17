import React from 'react';
import { ViewBase, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail />
			<ImageDetail />
			<ImageDetail />
			<ImageDetail />
		</View>
	);
};

export default ImageScreen;
const styles = StyleSheet.create({});
