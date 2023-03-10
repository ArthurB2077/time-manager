export default {
  getAllClocksUser: async function (userId) {
    const response = await fetch(
      `${process.env.VUE_APP_API_URL}/clocks/${userId}`,
      {
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: JSON.parse(localStorage.session).token,
        },
      }
    );
    return response.json();
  },
  postClockUser: async function (userId, clocking) {
    const response = await fetch(
      `${process.env.VUE_APP_API_URL}/clocks/${userId}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: JSON.parse(localStorage.session).token,
        },
        body: JSON.stringify(clocking),
      }
    );
    return response.json();
  },
};
