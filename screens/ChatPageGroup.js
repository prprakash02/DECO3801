import React from 'react';
import { WebView } from 'react-native-webview';

const ChatPageGroup = () => {
  return (
    <WebView 
      source={{ uri: "https://spring-dot-acoustic-cirrus-396009.ts.r.appspot.com/" }}
      style={{ flex: 1 }}
    />
  );
};

export default ChatPageGroup;