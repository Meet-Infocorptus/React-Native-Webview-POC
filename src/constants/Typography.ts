import {moderateScale} from 'react-native-size-matters';

export enum AppFontFamily {
  NotoSansBlack = 'NotoSans-Black',
  NotoSansBlackItalic = 'NotoSans-BlackItalic',
  NotoSansBold = 'NotoSans-Bold',
  NotoSansBoldItalic = 'NotoSans-BoldItalic',
  NotoSansExtraBold = 'NotoSans-ExtraBold',
  NotoSansExtraBoldItalic = 'NotoSans-ExtraBoldItalic',
  NotoSansItalic = 'NotoSans-Italic',
  NotoSansLight = 'NotoSans-Light',
  NotoSansLightItalic = 'NotoSans-LightItalic',
  NotoSansMedium = 'NotoSans-Medium',
  NotoSansMediumItalic = 'NotoSans-MediumItalic',
  NotoSansRegular = 'NotoSans-Regular',
  NotoSansSemiBold = 'NotoSans-SemiBold',
  NotoSansSemiBoldItalic = 'NotoSans-SemiBoldItalic',
  NotoSansThin = 'NotoSans-Thin',
  NotoSansThinItalic = 'NotoSans-ThinItalic',
}

export enum AppFontSize {
  S1 = moderateScale(18),
  S2 = moderateScale(16),
  S3 = moderateScale(14),
  S4 = moderateScale(12),
  S5 = moderateScale(10),
}
