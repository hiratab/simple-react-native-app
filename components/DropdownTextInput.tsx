import Dropdown from 'react-native-input-select';
import { TouchableWithoutFeedback, Text, View, TextInput } from 'react-native';

const DropdownTextInput = ({
  style,
  touchableWithoutFeedback,
  dropdown,
  textInput,
}: any) => (
  <TouchableWithoutFeedback
    style={style.touchableWithoutFeedback}
    onPress={touchableWithoutFeedback.onPress}
  >
    <>
      <Text>{dropdown.label}</Text>
      <View style={style.dropdownTextInputContainer} >
        {/* @ts-ignore */}
        <Dropdown
          placeholder={dropdown.placeholder}
          options={dropdown.options}
          selectedValue={dropdown.selectedValue}
          onValueChange={dropdown.onValueChange}
          dropdownContainerStyle={{
            width: '20%',
            minWidth: 100,
          }}
        />
        <TextInput
          style={style.textInput}
          onChangeText={textInput.onChangeText}
          value={textInput.value}
          placeholder={textInput.placeholder}
          keyboardType={textInput.keyboardType}
        />
      </View>
    </>
  </TouchableWithoutFeedback>
)

export default DropdownTextInput;
