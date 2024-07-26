import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Keyboard } from 'react-native';

import BlockHeight from '@/components/BlockHeight';
import NextHalvingDate from '@/components/NextHalvingDate';
import Hashrate from '@/components/Hashrate';
import FeesRates from '@/components/FeesRates';
import DropdownTextInput from '@/components/DropdownTextInput';


export default function Index() {
  const [buyBtcBrl, useBuyBtcBrl] = useState(0);
  const [sellBtcBrl, useSellBtcBrl] = useState(0);
  const [priceVariationBtcBrl, usePriceVariationBtcBrl] = useState(0);


  useEffect(() => {
    const fetchBtcPrices = async () => {
      const response = await fetch("https://ig.dev.stackfy.co.uk/api/v1/bitcoin/price");
      const data = await response.json();
      console.log('data', data);
      useBuyBtcBrl(data.result.brl.buy);
      useSellBtcBrl(data.result.brl.sell);
      usePriceVariationBtcBrl(data.result.brl.var);
    }

    fetchBtcPrices()
  }, []);

  const [btcAmount, setBtcAmount] = useState('0');
  const onChangeBtcAmount = (btcAmount: string) => {
    setBtcAmount(btcAmount);
  }

  const [number, setNumber] = useState('0.0');
  const onChangeNumber = (number: string) => {
    setNumber(number);
  }

  const [btcCurrency, setBtcCurrency] = useState('SATS');
  const btcDropdownItems = [
    { label: 'SATS', value: 'SATS' },
    { label: 'BTC', value: 'BTC' },
  ];

  const [fiatCurrency, setFiatCurrency] = useState('BRL');
  const fiatCurrencyDropdownItems = [
    { label: 'BRL', value: 'BRL' },
    { label: 'USD', value: 'USD' },
  ];


  return (
    <ScrollView style={styles.container} >
      <View>
        <Image source={{ uri: 'https://satsnow.stackfy.xyz/assets/assets/images/bitcoin_blue.png' }} style={styles.bitcoinLogo} />
        <Text style={styles.bitcoinLogoText}>$RS</Text>
      </View>
      <Text>BTC-BRL</Text>
      <Text>{`${buyBtcBrl}`}</Text>
      {/* @ts-ignore */}
      <Text style={{ color: 'black' }}><Text style={styles.priceVaration}>{`${priceVariationBtcBrl} %`} - 1D</Text></Text>
      <DropdownTextInput
        style={{
          touchableWithoutFeedback: {
            width: '100%',
          },
          dropdownTextInputContainer: {
            width: '100%',
            flexDirection: 'row',
            border: '5px solid red',
          },
          textInput: { ...styles.input },
        }}
        touchableWithoutFeedback={{
          onPress: Keyboard.dismiss
        }}
        dropdown={{
          label: "BTC",
          placeholder: "SATS",
          options: btcDropdownItems,
          selectedValue: btcCurrency,
          onValueChange: (value: any) => {
            setBtcCurrency(value);
            if ('SATS' === value) {
              setBtcAmount('0');
            } else {
              setBtcAmount('0.00000000');
            }
          }
        }}
        textInput={{
          onChangeText: onChangeBtcAmount,
          value: btcAmount,
          placeholder: btcCurrency === 'SATS' ? '0' : '0.00000000',
          keyboardType: "numeric",
        }}
      />
      <DropdownTextInput
        style={{
          touchableWithoutFeedback: {
            width: '100%'
          },
          dropdownTextInputContainer: {
            width: '100%',
            flexDirection: 'row',
          },
          textInput: { ...styles.input }
        }}
        touchableWithoutFeedback={{
          onPress: Keyboard.dismiss
        }}
        dropdown={{
          label: "BRL",
          placeholder: "BRL",
          options: fiatCurrencyDropdownItems,
          selectedValue: fiatCurrency,
          onValueChange: (value: any) => setFiatCurrency(value)
        }}
        textInput={{
          onChangeText: onChangeNumber,
          value: number,
          placeholder: "0.00",
          keyboardType: "numeric",
        }}
      />
      <Text style={styles.chainHeader}>Chain</Text>
      <View style={styles.chainContainer}>
        <View style={styles.chainInfoContainer}>
          <BlockHeight />
          <NextHalvingDate />
          <Hashrate />
        </View>
        <FeesRates />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 25,
    height: 25,
  },
  bitcoinLogo: {
    width: 50,
    height: 50,
    // position: 'absolute',
    margin: 'auto',
  },
  bitcoinLogoText: {
    color: 'white',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    left: 'auto',
    right: 'auto',
    width: 30,
    height: 30,
    borderColor: 'white',
    borderRadius: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  chainHeader: {
    fontWeight: "bold",
    fontSize: 20
  },
  priceVaration: {
    color: 'red'
  },
  chainContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  chainInfoContainer: {
    flexDirection: 'row',
  }
});
