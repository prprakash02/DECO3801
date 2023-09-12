import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import logo from '../assets/logo.jpg';

const CustomHeader = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Text style={styles.modalButton}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Call emergency logic */ }}>
            <Text style={styles.modalButton}>Call Emergency</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Share location logic */ }}>
            <Text style={styles.modalButton}>Share Location</Text>
          </TouchableOpacity>
        </View>
      </Modal>


      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity 
          style={styles.exclamationButton}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.exclamationText}>!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
      <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  logo: {
    width: 150,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  exclamationButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exclamationText: {
    fontSize: 24,
    color: 'white',
  },
});

export default CustomHeader;
