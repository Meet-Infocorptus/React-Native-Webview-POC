import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {AppColors} from '../utils';
import {AppFontFamily, AppFontSize} from '../constants';

interface AppTextProps {
  children: any;
  style?: TextStyle;
}

export default function AppText({children, style}: AppTextProps) {
  return <Text style={[styles.defaultStyle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: AppFontFamily.NotoSansRegular,
    fontSize: AppFontSize.S4,
    color: AppColors.text,
  },
});
