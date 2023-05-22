import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Comment, Heart, ThreeDots, VerifiedIcon} from '../assets/svg';
import {AppFontFamily, AppFontSize} from '../constants';
import {AppColors} from '../utils';
import AppText from './AppText';

interface CommentSectionProps {
  isVerified: boolean;
  isSubComment?: boolean;
  avatar: ImageSourcePropType;
}

export default function CommentSection({
  isVerified,
  isSubComment,
  avatar,
}: CommentSectionProps) {
  return (
    <View
      style={
        isSubComment
          ? {...styles.container, marginLeft: moderateScale(37)}
          : styles.container
      }>
      <View style={styles.userContainer}>
        <View style={styles.detailsAndAvatarContainer}>
          <Image source={avatar} />
          <View style={styles.detailsContainer}>
            <View style={styles.nameContainer}>
              <AppText style={styles.nameText}>안녕 나 응애 </AppText>
              {isVerified ? <VerifiedIcon /> : null}
              <AppText style={styles.verifiedText}> 1일전</AppText>
            </View>
          </View>
        </View>
        <ThreeDots />
      </View>
      <View style={styles.commentContainer}>
        <AppText style={styles.commentText}>
          어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
          아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
          기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
          올라온다고 하니 꼭 봐주세용~!
        </AppText>
        <View style={styles.likeAndCommentBtns}>
          <TouchableOpacity style={styles.iconTextContainer}>
            <Heart height={moderateScale(20)} width={moderateScale(20)} />
            <AppText style={styles.iconText}>5</AppText>
          </TouchableOpacity>
          {isSubComment ? null : (
            <TouchableOpacity style={styles.iconTextContainer}>
              <Comment height={moderateScale(17)} width={moderateScale(17)} />
              <AppText style={styles.iconText}>5</AppText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    backgroundColor: AppColors.white,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  commentContainer: {
    marginLeft: moderateScale(38),
    marginRight: moderateScale(20),
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    fontFamily: AppFontFamily.NotoSansRegular,
    fontSize: AppFontSize.S4,
  },
  iconText: {
    fontFamily: AppFontFamily.NotoSansRegular,
    fontSize: AppFontSize.S5,
    color: AppColors.hintText,
    marginLeft: moderateScale(6),
    marginRight: moderateScale(10),
  },
  likeAndCommentBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(5),
  },
});
