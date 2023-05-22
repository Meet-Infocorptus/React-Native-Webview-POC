import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {BookMark, Comment, Heart, ThreeDots} from '../assets/svg';
import {AppFontFamily, AppFontSize} from '../constants';
import {AppColors} from '../utils';
import AppText from './AppText';
import AppButton from './AppButton';

interface LikeCommentSectionProps {
  onAlertBtnPress: () => void;
}

export default function LikeCommentSection({
  onAlertBtnPress,
}: LikeCommentSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconsSpreeContainer}>
        <TouchableOpacity style={styles.iconTextContainer}>
          <Heart height={moderateScale(30)} width={moderateScale(30)} />
          <AppText style={styles.iconText}>5</AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconTextContainer}>
          <Comment height={moderateScale(25)} width={moderateScale(25)} />
          <AppText style={styles.iconText}>5</AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <BookMark height={moderateScale(33)} width={moderateScale(33)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.threeDotsContainer}>
          <ThreeDots height={moderateScale(15)} width={moderateScale(15)} />
        </TouchableOpacity>
      </View>
      <AppButton title="WV Alert" onPress={onAlertBtnPress} />
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
    borderBottomWidth: 2,
    borderColor: AppColors.tagColor,
  },
  iconsSpreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontFamily: AppFontFamily.NotoSansRegular,
    fontSize: AppFontSize.S4,
    color: AppColors.hintText,
    marginLeft: moderateScale(6),
    marginRight: moderateScale(10),
  },
  titleText: {
    fontFamily: AppFontFamily.NotoSansBlack,
    fontSize: AppFontSize.S1,
  },
  threeDotsContainer: {
    marginLeft: moderateScale(20),
  },
});
