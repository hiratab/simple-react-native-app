import { View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import ImageContainerWithText from './ImageContainerWithText';

const getFees = async () => {
  const response = await fetch("https://mempool.space/api/v1/fees/recommended");
  const data = await response.json();
  return data;
};

const FeesRates = () => {
  const [fastestFee, setFastestFee] = useState(0);
  const [halfHourFee, setHalfHourFee] = useState(0);
  const [hourFee, setHourFee] = useState(0);
  const [economyFee, setEconomyFee] = useState(0);
  const [minimumFee, setMinimumFee] = useState(0);

  useEffect(() => {
    const fetchFees = async () => {
      const fees = await getFees();

      setFastestFee(fees.fastestFee);
      setHalfHourFee(fees.halfHourFee);
      setHourFee(fees.hourFee);
      setEconomyFee(fees.economyFee);
      setMinimumFee(fees.minimumFee);
    }

    fetchFees()
  }, []);

  return (
    <View style={styles.feesContainer}>
      <ImageContainerWithText
        style={styles}
        imageUri={'https://satsnow.stackfy.xyz/assets/assets/images/icons/turtle.png'}
        text={`${minimumFee} sats/vB`}
      />
      <ImageContainerWithText
        style={styles}
        imageUri={'https://satsnow.stackfy.xyz/assets/assets/images/icons/readiness_score.png'}
        text={`${hourFee} sats/vB`}
      />
      <ImageContainerWithText
        style={styles}
        imageUri={'https://satsnow.stackfy.xyz/assets/assets/images/icons/rabbit.png'}
        text={`${fastestFee} sats/vB`}
      />
    </View>
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
  feesContainer: {
    flexDirection: 'row',
  }
});


export default FeesRates;
