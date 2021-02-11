import React, { Component } from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TimeTableView, { genTimeBlock } from "react-native-timetable";
import moment from "moment-timezone";
import { data } from "../../api/calendar/constants";
import { colors, main } from "../../styles";

moment.tz.setDefault("America/Santiago");

export class CalendarWeek extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 6;
    this.pivotDate = genTimeBlock("mon", 20, 0);
    this.now = moment().tz("America/Santiago").toDate();
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  seeMonthView = () => {
    const { navigation } = this.props;
    navigation.navigate("CalendarMonth");
  };

  render() {
    // console.log(this.pivotDate);
    return (
      <SafeAreaView style={main.flexOne}>
        <View style={main.flexOne}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={data}
            pivotTime={8}
            pivotEndTime={19}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={{ backgroundColor: colors.gray }}
            locale="es-mx"
            formatDateHeader="ddd"
          />
        </View>
        <View>
          <TouchableOpacity onPress={this.seeMonthView}>
            <Text>Vista mensual</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
