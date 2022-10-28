import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  title: {
    color: colors.textGrey,
    paddingVertical: 8,
  },
  image: {
    width: (width - 40) / 2,
    height: 220,
    borderRadius: 8,
    marginLeft: 3
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  }
})
