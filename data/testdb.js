import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Fetch = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://acoustic-cirrus-396009.ts.r.appspot.com/database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: 'root',
          pass: '3_l6#_9%?SBqji=%',
          db_name: 'users',
          query: 'select * from userprofiles'
        })
      });
      const result = await response.text();  // Use .text() instead of .json()
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

export default Fetch;
