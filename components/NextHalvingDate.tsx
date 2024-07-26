import { StyleSheet } from 'react-native';

import ImageContainerWithText from './ImageContainerWithText';

const NextHalvingDate = () => {
  return (
    <ImageContainerWithText
      style={styles}
      imageUri={'https://satsnow.stackfy.xyz/assets/assets/images/icons/subtract.png'}
      text={'17.04.2028'}
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

export default NextHalvingDate;
