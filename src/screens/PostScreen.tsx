/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import WebView from 'react-native-webview';
import {
  AppChips,
  AppHeader,
  AppText,
  CommentSection,
  LikeCommentSection,
  PostCommentSection,
  UserDetailsContainer,
} from '../components';
import {AppFontFamily, AppFontSize} from '../constants';
import {AppColors} from '../utils';

const chipsData = [
  {
    id: 1,
    title: '#2023',
  },
  {
    id: 2,
    title: '#TODAYISMONDAY',
  },
  {
    id: 3,
    title: '#TOP',
  },
  {
    id: 4,
    title: '#POPS!',
  },
  {
    id: 5,
    title: '#WOW',
  },
  {
    id: 6,
    title: '#ROW',
  },
];

const webContent = `<!DOCTYPE html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>WebView Page</title>
      <style>
      body {
        background-color: #EDEEF3; /* Specify the desired background color */
      }
    </style>
      <script>
        function triggerRNAlert() {
          window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'alert', message: 'This alert is triggered from WebView' }));
        }
      </script>
    </head>
    <body>
      <h1>WebView Page</h1>
      <button onclick="alert('This alert is triggered from WebView')">WebView Alert</button>
      <button onclick="triggerRNAlert()">RN Alert</button>
    </body>
  </html>`;

export default function PostScreen(): JSX.Element {
  const webViewRef: any = React.useRef(null);

  const handleWVAlertClick = () => {
    webViewRef?.current?.injectJavaScript(`
        alert("This alert is triggered from WebView");
      `);
    console.log(
      '🚀 => handleWVAlertClick => webViewRef?.current?.injectJavaScript:',
      webViewRef?.current?.injectJavaScript,
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.white} />
      <AppHeader />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <UserDetailsContainer />
        <View style={styles.postContainer}>
          <AppText style={styles.postDescriptionTitle}>
            {'지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?\n'}
          </AppText>
          <AppText style={styles.postDescriptionText}>
            {
              '지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어?\n\n후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???\n\n올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!'
            }
          </AppText>
          <View style={styles.chipsContainer}>
            {chipsData.map((item: any) => (
              <AppChips title={item.title} key={item.id} />
            ))}
          </View>
        </View>
        <View style={styles.webViewContainer}>
          <WebView
            ref={webViewRef}
            source={{html: webContent}}
            javaScriptEnabled={true}
            scrollEnabled={false}
            injectedJavaScriptBeforeContentLoaded={`
            window.alert = function(message) {
              window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'alert', message }));
            };
          `}
            onMessage={event => {
              const {type, message} = JSON.parse(event.nativeEvent.data);
              if (type === 'alert') {
                Alert.alert('This alert is triggered from WebView', message);
              }
            }}
          />
        </View>
        <LikeCommentSection onAlertBtnPress={handleWVAlertClick} />
        <CommentSection
          isVerified={true}
          avatar={require('../assets/images/AvatarOne.png')}
        />
        <CommentSection
          isVerified={false}
          isSubComment={true}
          avatar={require('../assets/images/AvatarTwo.png')}
        />
        <PostCommentSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  postContainer: {
    paddingHorizontal: moderateScale(15),
  },
  postDescriptionTitle: {
    fontFamily: AppFontFamily.NotoSansBlack,
    fontSize: AppFontSize.S4,
  },
  postDescriptionText: {
    fontFamily: AppFontFamily.NotoSansRegular,
    fontSize: AppFontSize.S4,
  },
  webViewContainer: {
    width: '100%',
    height: Dimensions.get('screen').width * 1.2,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: moderateVerticalScale(10),
  },
});
