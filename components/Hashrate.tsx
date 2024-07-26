import { StyleSheet } from 'react-native';

import ImageContainerWithText from './ImageContainerWithText';

const Hashrate = () => {
  return (
    <ImageContainerWithText
      style={styles}
      imageUri={'https://satsnow.stackfy.xyz/assets/assets/images/icons/mining.png'}
      text={'645.19 EH/s'}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default Hashrate;
