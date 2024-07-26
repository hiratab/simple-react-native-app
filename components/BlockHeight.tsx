import { View, Text, Image, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import ImageContainerWithText from './ImageContainerWithText';

const BlockHeight = () => {
  const [blockHeight, setBlockHeight] = useState(0);
  useEffect(() => {
    const fetchChainHeight = async () => {
      const response = await fetch("https://mempool.space/api/blocks/tip/height");
      const data = await response.json();
      setBlockHeight(data);
    }

    fetchChainHeight();
  }, []);

  return (
    <ImageContainerWithText
      style={styles}
      imageUri={'https://satsnow.stackfy.xyz/assets/assets/images/icons/block.png'}
      text={blockHeight}
    />
  );
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

export default BlockHeight;
