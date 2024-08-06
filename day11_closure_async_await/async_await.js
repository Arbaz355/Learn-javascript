const callApi = new Promise((resolve, reject) => {
  const isUserAuthorized = false;
  if (isUserAuthorized) {
    resolve({
      returnParam: [
        {
          name: "arbaz",
          age: 18,
        },
        {
          name: "abhay",
          age: 22,
        },
        {
          name: "anjali",
          age: 18,
        },
      ],
    });
  } else {
    reject("Unauthorized, 401");
  }
});

const fetchData = async () => {
  try {
    const response = await callApi;
    const data = await response.json();
  } catch (err) {
    console.error(err);
  }
};

fetchData();
