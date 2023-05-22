import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {AppColors} from '../utils';
import AppText from './AppText';
import {VerifiedIcon} from '../assets/svg';
import AppButton from './AppButton';
import {AppFontFamily, AppFontSize} from '../constants';

export default function UserDetailsContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.detailsAndAvatarContainer}>
        <Image source={require('../assets/images/AvatarOne.png')} />
        <View style={styles.detailsContainer}>
          <View style={styles.nameContainer}>
            <AppText style={styles.nameText}>안녕 나 응애 </AppText>
            <VerifiedIcon />
            <AppText style={styles.verifiedText}> 1일전</AppText>
          </View>
          <View style={styles.weightHeightContainer}>
            <AppText style={styles.weightHeightText}>165cm</AppText>
            <View style={styles.dotSeparator} />
            <AppText style={styles.weightHeightText}>53kg</AppText>
          </View>
        </View>
      </View>
      <AppButton title={'팔로우'} />
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
  detailsContainer: {
    marginLeft: moderateScale(7),
  },
  detailsAndAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: AppFontFamily.NotoSansBlack,
    fontSize: AppFontSize.S3,
  },
  verifiedText: {
    fontFamily: AppFontFamily.NotoSansRegular,
    fontSize: AppFontSize.S5,
    color: AppColors.hintText,
  },
  weightHeightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weightHeightText: {
    color: AppColors.hintText,
    fontSize: AppFontSize.S4,
  },
  dotSeparator: {
    height: moderateScale(3),
    width: moderateScale(3),
    backgroundColor: AppColors.hintText,
    borderRadius: moderateScale(3),
    marginHorizontal: moderateScale(5),
  },
});
