import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getItemData } from "../../api/forms/getItemData";
import { VARKBox } from "../../components/profile/VARKBox";
import { fireAuth } from "../../config/Firebase";
import { logOut } from "../../redux/actions/authActions";
import { main } from "../../styles";
import { fullName } from "../../utils/fullName";

export const Profile = ({ navigation }) => {
  const uid = useSelector((state) => state.auth.currentUserId);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", VARK: {} });
  const [state, setState] = useState({ loading: true, varkDesc: {} });

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getItemData("users", uid);
      const { firstName, VARKresults } = userData;
      setUser({ firstName, VARK: VARKresults });
      const varkDesc = await getItemData("vark-descriptions", "results");
      setState({ loading: false, varkDesc });
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    fireAuth
      .signOut()
      .then(() => {
        dispatch(logOut());
        navigation.replace("LogIn");
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={main.container}>
      <View style={main.subcontainer}>
        <Text>Hola {fullName(user)} !</Text>
        <VARKBox user={user} state={state} />
        <View style={main.buttonView}>
          <TouchableOpacity onPress={handleLogout} style={main.button}>
            <Text style={main.buttonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
