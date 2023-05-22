import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {AppColors} from '../utils';
import AppText from './AppText';
import {AppFontFamily, AppFontSize} from '../constants';

interface AppButtonProps {
  title: string;
  onPress?: () => void;
}

export default function AppButton({title, onPress}: AppButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.titleText}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.secondary,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(7),
    borderRadius: moderateScale(100),
  },
  titleText: {
    color: AppColors.white,
    fontFamily: AppFontFamily.NotoSansBold,
    fontSize: AppFontSize.S4,
  },
});
