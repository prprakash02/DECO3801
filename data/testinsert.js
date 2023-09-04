import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const PushData = () => {
  const [response, setResponse] = useState(null);

  const pushData = async () => {
    try {
      const query = 'INSERT INTO userprofiles (userid, username, date_of_birth) VALUES (8, \'SaberFate\', \'1995-09-30\',\'root\');';
      const response = await fetch('https://acoustic-cirrus-396009.ts.r.appspot.com/database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: 'root',
          pass: '3_l6#_9%?SBqji=%',
          db_name: 'users',
          query: query
        })
      });
      const result = await response.text();
      setResponse(result);
    } catch (error) {
      console.error('Error pushing data:', error);
    }
  };

  return (
    <View>
      <Button title="Push Data" onPress={pushData} />
      {response && <Text>Data pushed successfully: {response}</Text>}
    </View>
  );
};

export default PushData;
