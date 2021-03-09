import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ActivityIndicator } from "react-native-paper";
import { db } from "../../config/Firebase";
import { colors, main } from "../../styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const VARKChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const ref = await db.collection("vark").doc("count").get();
      const fbData = ref.data();
      setData([
        {
          name: "Visual",
          count: fbData.visual,
          color: colors.pieLighterBlue,
          legendFontColor: colors.darkGray,
          legendFontSize: 16,
        },
        {
          name: "Lecto-Escritura",
          count: fbData.readWrite,
          color: colors.pieDarkBlue,
          legendFontColor: colors.darkGray,
          legendFontSize: 16,
        },
        {
          name: "Kinestésica",
          count: fbData.kinesthetic,
          color: colors.pieLightBlue,
          legendFontColor: colors.darkGray,
          legendFontSize: 16,
        },
        {
          name: "Auditiva",
          count: fbData.aural,
          color: colors.pieBlue,
          legendFontColor: colors.darkGray,
          legendFontSize: 16,
        },
      ]);
    }
    fetchData();
  }, []);

  if (data.length === 0) {
    return <ActivityIndicator />;
  }
  return (
    <PieChart
      data={data}
      accessor="count"
      backgroundColor="transparent"
      paddingLeft="15"
      center={[0, 0]}
      height={windowHeight / 3}
      width={windowWidth}
      style={main.pieChart}
      absolute
      hasLegend
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
      }}
    />
  );
};
