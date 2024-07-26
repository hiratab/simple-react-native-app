import { StyleSheet, Image } from 'react-native';

// @ts-ignore
export default function ImageViewer() {
  return (
    <Image source={ require('../assets/images/background-image.png') } style={styles.image}/>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
