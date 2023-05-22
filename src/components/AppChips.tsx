import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {AppFontFamily, AppFontSize} from '../constants';
import {AppColors} from '../utils';
import AppText from './AppText';

export default function AppChips({title}: any) {
  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.tagColor,
    borderColor: AppColors.tagBorder,
    borderWidth: 1,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(3),
    borderRadius: moderateScale(100),
    marginRight: moderateScale(7),
    marginVertical: moderateVerticalScale(3.5),
  },
  titleText: {
    color: AppColors.greyText,
    fontFamily: AppFontFamily.NotoSansBold,
    fontSize: AppFontSize.S4,
  },
});
