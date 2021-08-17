import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				imageSource={require('../../assets/forest.jpg')}
				title='Forest'
			/>
			<ImageDetail
				imageSource={require('../../assets/beach.jpg')}
				title='Beach'
			/>
			<ImageDetail
				imageSource={require('../../assets/mountain.jpg')}
				title='Mountain'
			/>
			<ImageDetail
				imageSource={require('../../assets/beach.jpg')}
				title='Forest'
			/>
		</View>
	);
};

export default ImageScreen;
const styles = StyleSheet.create({});
