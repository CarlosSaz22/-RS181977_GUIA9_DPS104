import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';

export default function App() {
  const initialHTMLContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Mi página web</title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
<Center>
<br>
<h1>Hola Mundo</h1>
</Center>

</body>
</html>`;

  return (
    <View
      style={{
        flex: 1,
      }}>
      <WebView
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          html: initialHTMLContent,
        }}
      />
    </View>
  );
}
