import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import { getItemData } from "../../api/forms/getItemData";
import { VARKBox } from "../../components/profile/VARKBox";
import { Loading } from "../../components/shared/Loading";
import { db, fireAuth } from "../../config/Firebase";
import { logOut } from "../../redux/actions/authActions";
import { authStyle, main } from "../../styles";
import { fullName } from "../../utils/fullName";

export const Profile = ({ navigation }) => {
  const uid = useSelector((state) => state.auth.currentUserId);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ firstName: "", lastName: "", VARK: {} });
  const [state, setState] = useState({ isLoading: true, varkDesc: {} });

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getItemData("users", uid);
      const { firstName, lastName, VARKresults, notificationToken } = userData;
      setUser({ firstName, lastName, VARK: VARKresults });
      const varkDesc = await getItemData("vark-descriptions", "results");
      setState({ isLoading: false, varkDesc });
      if (!notificationToken) {
        await registerForPushNotifications();
      }
    };
    fetchData();
  }, []);

  const registerForPushNotifications = async () => {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;
    const token = await Notifications.getExpoPushTokenAsync();
    db.collection("users").doc(uid).update({ notificationToken: token.data });
  };

  const handleLogout = () => {
    fireAuth
      .signOut()
      .then(() => {
        dispatch(logOut());
        navigation.replace("LogIn");
      })
      .catch((error) => alert(error));
  };
  if (state.isLoading) {
    return <Loading />;
  }
  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <Text style={authStyle.profileName}>Hola {fullName(user)} !</Text>
        <VARKBox user={user} state={state} />
        <View style={main.buttonView}>
          <TouchableOpacity onPress={handleLogout} style={authStyle.buttonLogout}>
            <Text style={main.buttonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
