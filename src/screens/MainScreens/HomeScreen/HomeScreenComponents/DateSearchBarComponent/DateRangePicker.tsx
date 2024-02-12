import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DateSearch = ({ onDatesSelected } : any) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const today = new Date();

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  const handleSearch = () => {
    onDatesSelected(startDate, endDate);
    setModalVisible(false); // Filtreleme yapıldıktan sonra modal'ı kapat
  };

  const handleCancel = () => {
    setModalVisible(false); // İptal edildiğinde modal'ı kapat
  };

  return (
    <View>
      <Button title="Tarih Seç" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Başlangıç Tarihi:</Text>
            <DatePicker
              date={startDate}
              onDateChange={handleStartDateChange}
              mode="date"
              style={styles.datePicker}
              minimumDate={today} // Bugünün tarihinden önceki tarihleri engelle
              maximumDate={endDate} // Bitiş tarihinden sonraki tarihleri engelle
            />
            <Text style={styles.label}>Bitiş Tarihi:</Text>
            <DatePicker
              date={endDate}
              onDateChange={handleEndDateChange}
              mode="date"
              style={styles.datePicker}
              minimumDate={startDate} // Başlangıç tarihinden önceki tarihleri engelle
              maximumDate={new Date(2030, 0, 1)} // Gelecek tarihler için bir sınır belirle
            />
            <View style={styles.buttonContainer}>
              <Button title="Filtrele" onPress={handleSearch} />
              <Button title="İptal" onPress={handleCancel} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  datePicker: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DateSearch;