import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {BackArrow, Bell} from '../assets/svg';
import AppText from './AppText';
import {AppColors} from '../utils';
import {AppFontFamily, AppFontSize} from '../constants';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <BackArrow />
      </TouchableOpacity>
      <AppText style={styles.titleText}>자유톡</AppText>
      <TouchableOpacity>
        <Bell />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(15),
    backgroundColor: AppColors.white,
  },
  titleText: {
    fontFamily: AppFontFamily.NotoSansBlack,
    fontSize: AppFontSize.S1,
  },
});
