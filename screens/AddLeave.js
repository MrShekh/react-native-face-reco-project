import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const leaveTypes = [
  { label: 'Casual', value: 'Casual', icon: 'calendar-blank-outline' },
  { label: 'Sick', value: 'Sick', icon: 'emoticon-sad-outline' },
  { label: 'Other', value: 'Other', icon: 'dots-horizontal' },
];

const AddLeave = ({ navigation }) => {
  const [type, setType] = useState('Casual');
  const [cause, setCause] = useState('Trip to Cannes');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [days, setDays] = useState(0);
  const [selecting, setSelecting] = useState('from');
  const [markedDates, setMarkedDates] = useState({});
  const [fromTime, setFromTime] = useState('9:30');
  const [fromAMPM, setFromAMPM] = useState('AM');
  const [toTime, setToTime] = useState('6:30');
  const [toAMPM, setToAMPM] = useState('PM');

  // Calendar selection logic
  const onDayPress = (day) => {
    if (selecting === 'from') {
      setFromDate(day.dateString);
      setToDate('');
      setMarkedDates({
        [day.dateString]: { selected: true, selectedColor: '#fff', customStyles: { container: { borderColor: '#7C4DFF', borderWidth: 2, backgroundColor: '#fff' }, text: { color: '#7C4DFF', fontWeight: 'bold' } } },
      });
      setSelecting('to');
      setDays(0);
    } else {
      if (!fromDate) return;
      const start = new Date(fromDate);
      const end = new Date(day.dateString);
      if (end < start) {
        setFromDate(day.dateString);
        setToDate('');
        setMarkedDates({
          [day.dateString]: { selected: true, selectedColor: '#fff', customStyles: { container: { borderColor: '#7C4DFF', borderWidth: 2, backgroundColor: '#fff' }, text: { color: '#7C4DFF', fontWeight: 'bold' } } },
        });
        setSelecting('to');
        setDays(0);
        return;
      }
      setToDate(day.dateString);
      // Mark range
      let range = {};
      let current = new Date(start);
      let count = 1;
      while (current <= end) {
        const ds = current.toISOString().split('T')[0];
        range[ds] = {
          customStyles: {
            container: {
              borderColor: '#7C4DFF',
              borderWidth: 2,
              backgroundColor: '#fff',
            },
            text: {
              color: '#7C4DFF',
              fontWeight: 'bold',
            },
          },
        };
        current.setDate(current.getDate() + 1);
        count++;
      }
      setMarkedDates(range);
      setDays(count - 1);
      setSelecting('from');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={28} color="#bbb" />
      </TouchableOpacity>
      <Text style={styles.title}>New Leave</Text>
      <View style={styles.card}>
        {/* Type row as pill buttons */}
        <View style={styles.typeRow}>
          {leaveTypes.map((t) => (
            <TouchableOpacity
              key={t.value}
              style={[styles.typePill, type === t.value && styles.typePillActive]}
              onPress={() => setType(t.value)}
            >
              <Icon name={t.icon} size={20} color={type === t.value ? '#fff' : '#7C4DFF'} style={{ marginRight: 6 }} />
              <Text style={[styles.typePillText, type === t.value && styles.typePillTextActive]}>{t.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Cause */}
        <View style={styles.rowWithIcon}>
          <Icon name="pencil-outline" size={22} color="#7C4DFF" style={styles.icon} />
          <Text style={styles.label}>Cause</Text>
          <TextInput
            style={styles.input}
            placeholder="Reason for leave"
            value={cause}
            onChangeText={setCause}
          />
        </View>
        {/* From */}
        <View style={styles.rowWithIcon}>
          <Icon name="arrow-right-bold-circle-outline" size={22} color="#7C4DFF" style={styles.icon} />
          <Text style={styles.label}>From</Text>
          <Text style={styles.value}>{fromDate ? `${fromDate}  ${fromTime} ${fromAMPM}` : 'Select date'}</Text>
        </View>
        {/* Time picker (simple) */}
        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>Time</Text>
          <TextInput
            style={styles.timeInput}
            value={fromTime}
            onChangeText={setFromTime}
            keyboardType="numeric"
            maxLength={5}
          />
          <TouchableOpacity style={[styles.ampmBtn, fromAMPM === 'AM' && styles.ampmBtnActive]} onPress={() => setFromAMPM('AM')}><Text style={[styles.ampmText, fromAMPM === 'AM' && styles.ampmTextActive]}>AM</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.ampmBtn, fromAMPM === 'PM' && styles.ampmBtnActive]} onPress={() => setFromAMPM('PM')}><Text style={[styles.ampmText, fromAMPM === 'PM' && styles.ampmTextActive]}>PM</Text></TouchableOpacity>
        </View>
        {/* Calendar */}
        <View style={styles.calendarContainer}>
          <Calendar
            markingType={'custom'}
            markedDates={markedDates}
            onDayPress={onDayPress}
            theme={{
              backgroundColor: '#fff',
              calendarBackground: '#fff',
              todayTextColor: '#7C4DFF',
              arrowColor: '#7C4DFF',
              textSectionTitleColor: '#7C4DFF',
              monthTextColor: '#181A20',
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: 'bold',
              selectedDayBackgroundColor: '#fff',
              selectedDayTextColor: '#7C4DFF',
            }}
            style={{ borderRadius: 12, overflow: 'hidden' }}
          />
        </View>
        {/* To */}
        <View style={styles.rowWithIcon}>
          <Icon name="arrow-right-bold-circle-outline" size={22} color="#7C4DFF" style={styles.icon} />
          <Text style={styles.label}>To</Text>
          <Text style={styles.value}>{toDate ? `${toDate}  ${toTime} ${toAMPM}` : 'Select date'}</Text>
        </View>
        {/* Time picker (simple) */}
        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>Time</Text>
          <TextInput
            style={styles.timeInput}
            value={toTime}
            onChangeText={setToTime}
            keyboardType="numeric"
            maxLength={5}
          />
          <TouchableOpacity style={[styles.ampmBtn, toAMPM === 'AM' && styles.ampmBtnActive]} onPress={() => setToAMPM('AM')}><Text style={[styles.ampmText, toAMPM === 'AM' && styles.ampmTextActive]}>AM</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.ampmBtn, toAMPM === 'PM' && styles.ampmBtnActive]} onPress={() => setToAMPM('PM')}><Text style={[styles.ampmText, toAMPM === 'PM' && styles.ampmTextActive]}>PM</Text></TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply for {days} Days Leave</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 56 : 24,
    paddingHorizontal: 0,
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    top: Platform.OS === 'ios' ? 56 : 24,
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 4,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#181A20',
    marginTop: Platform.OS === 'ios' ? 56 : 24,
    marginBottom: 18,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginHorizontal: 16,
    padding: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 6,
    marginBottom: 24,
  },
  typeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  typePill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#7C4DFF',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
    backgroundColor: '#fff',
  },
  typePillActive: {
    backgroundColor: '#7C4DFF',
    borderColor: '#7C4DFF',
  },
  typePillText: {
    color: '#7C4DFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  typePillTextActive: {
    color: '#fff',
  },
  rowWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 15,
    color: '#888',
    width: 60,
    fontWeight: '600',
  },
  value: {
    fontSize: 15,
    color: '#181A20',
    fontWeight: '600',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#181A20',
    borderBottomWidth: 1,
    borderColor: '#E0DCE3',
    marginLeft: 8,
    paddingVertical: 2,
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F5F3FF',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 68,
  },
  timeLabel: {
    fontSize: 15,
    color: '#888',
    marginRight: 8,
    fontWeight: '600',
  },
  timeInput: {
    width: 48,
    fontSize: 15,
    color: '#181A20',
    borderBottomWidth: 1,
    borderColor: '#E0DCE3',
    marginRight: 8,
    textAlign: 'center',
    paddingVertical: 2,
  },
  ampmBtn: {
    borderWidth: 1,
    borderColor: '#7C4DFF',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginLeft: 4,
    backgroundColor: '#fff',
  },
  ampmBtnActive: {
    backgroundColor: '#7C4DFF',
  },
  ampmText: {
    color: '#7C4DFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  ampmTextActive: {
    color: '#fff',
  },
  applyBtn: {
    backgroundColor: '#7C4DFF',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    elevation: 2,
  },
  applyBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddLeave; 