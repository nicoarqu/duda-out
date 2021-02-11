import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Agenda, LocaleConfig } from "react-native-calendars";
import { localeES } from "../../api/calendar/constants";

// change to Spanish locale
LocaleConfig.locales.es = localeES;
LocaleConfig.defaultLocale = "es";

export const CalendarMonth = () => {
  const agendaRef = useRef(null);

  // desactivar vista por defecto --pending
  useEffect(() => {
    const initPos = agendaRef.current.initialScrollPadPosition();
    agendaRef.current.setScrollPadPosition(initPos, true);
  }, []);

  return (
    <Agenda
      ref={agendaRef}
      // The list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key has to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={{
        "2021-02-22": [{ name: "Prueba" }],
        "2021-02-23": [{ name: "Clase", height: 80 }],
        "2021-02-25": [{ name: "Evaluación" }, { name: "Estudio" }],
        "2021-03-07": [{ name: "Evaluación" }, { name: "Estudio" }],
      }}
      renderItem={(item, firstItemInDay) => {
        console.log(firstItemInDay);
        return (
          <View style={{ backgroundColor: "white", flex: 0.5, top: firstItemInDay ? 40 : 0 }}>
            <Text>{item.name}</Text>
          </View>
        );
      }}
      renderEmptyData={() => {
        return (
          <View>
            <Text>No hay eventos este día</Text>
          </View>
        );
      }}
    />
  );
};
