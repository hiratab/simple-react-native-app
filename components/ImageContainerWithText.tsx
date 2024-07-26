import { View, Image, Text } from 'react-native';

const ImageContainerWithText = ({ imageUri, text, style }: any) => {
  return (
    <View style={style.container}>
      <Image source={{ uri: imageUri }} style={style.image} />
      <Text>{text}</Text>
    </View>
  )
};

export default ImageContainerWithText;
