export const sendPushNotification = async (token, title, body) => {
  const message = {
    to: token,
    sound: "default",
    title,
    body,
    data: { _displayInForeGround: true },
  };
  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
