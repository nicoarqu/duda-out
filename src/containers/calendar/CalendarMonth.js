import React from "react";
import { View, Text } from "react-native";
import { Calendar, CalendarList, Agenda, LocaleConfig } from "react-native-calendars";
import { localeES } from "../../api/calendar/constants";

// change to Spanish locale
LocaleConfig.locales.es = localeES;
LocaleConfig.defaultLocale = "es";

export const CalendarMonth = () => {
  return (
    <View style={{ paddingTop: 50, flex: 1 }}>
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
          "2012-05-22": [{ name: "item 1 - any js object" }],
          "2012-05-23": [{ name: "item 2 - any js object", height: 80 }],
          "2012-05-24": [],
          "2012-05-25": [{ name: "item 3 - any js object" }, { name: "any js object" }],
        }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={(month) => {
          console.log("trigger items loading");
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => {
          console.log(calendarOpened);
        }}
        // Callback that gets called on day press
        onDayPress={(day) => {
          console.log("day pressed");
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={(day) => {
          console.log("day changed");
        }}
        // Initially selected day
        selected="2012-05-16"
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate="2012-05-10"
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate="2012-05-30"
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
        renderDay={() => (
          <View>
            <Text>This is date!</Text>
          </View>
        )}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => (
          <View>
            <Text>This is empty date!</Text>
          </View>
        )}
        // Hide knob button. Default = false
        hideKnob
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        markedDates={{
          "2012-05-16": { selected: true, marked: true },
          "2012-05-17": { marked: true },
          "2012-05-18": { disabled: true },
        }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
        onRefresh={() => console.log("refreshing...")}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
        refreshControl={null}
        // Agenda theme
        theme={{
          agendaDayTextColor: "yellow",
          agendaDayNumColor: "green",
          agendaTodayColor: "red",
          agendaKnobColor: "blue",
        }}
        // Agenda container style
        style={{}}
      />
    </View>
  );
};
