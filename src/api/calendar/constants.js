import moment from "moment-timezone";
import { genTimeBlock } from "react-native-timetable";

moment.tz.setDefault("America/Santiago");

export const data = [
  {
    title: "Cálculo",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 10, 50),
    location: "Sala 403",
    extra_descriptions: ["Kim", "Lee"],
  },
  {
    title: "Cálculo",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 10, 50),
    location: "Sala 403",
    extra_descriptions: ["Clase en modalidad virtual"],
  },
  {
    title: "Física",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Física",
    startTime: genTimeBlock("WED", 11),
    endTime: genTimeBlock("WED", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Comunicaciones",
    startTime: genTimeBlock("TUE", 15),
    endTime: genTimeBlock("TUE", 16, 50),
    location: "Sala 123",
    extra_descriptions: ["Chen"],
  },
  {
    title: "Programación",
    startTime: genTimeBlock("FRI", 12),
    endTime: genTimeBlock("FRI", 13, 30),
    location: "Sala 123",
    extra_descriptions: ["Nakamura"],
  },
  {
    title: "Estudio",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 50),
    location: "Activity Center",
  },
  {
    title: "Estudio",
    startTime: genTimeBlock("FRI", 14, 30),
    endTime: genTimeBlock("FRI", 15, 50),
    location: "Activity Center",
  },
];
