import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {AppFontFamily, AppFontSize} from '../constants';
import {AppColors} from '../utils';
import AppText from './AppText';

export default function PostCommentSection() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/ImagePlaceHolder.png')} />
      <TextInput
        style={styles.inputText}
        placeholder="댓글을 남겨주세요."
        placeholderTextColor={AppColors.placeholderText}
      />
      <TouchableOpacity>
        <AppText>등록</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(15),
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderTopWidth: 2,
    borderColor: AppColors.tagColor,
    marginTop: moderateVerticalScale(10),
    paddingVertical: moderateVerticalScale(10),
  },
  inputText: {
    flex: 1,
    fontFamily: AppFontFamily.NotoSansRegular,
    fontSize: AppFontSize.S4,
    color: AppColors.text,
    paddingVertical: 0,
    paddingLeft: moderateScale(10),
  },
});
