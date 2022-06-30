const axios = require("axios");

// require("./callMock");

async function cityWeather(city) {
  // Implement the function
  // You can use console.log for debugging
  if (typeof city != "string") {
    throw new TypeError("not a string");
  }
  if (!/[a-zA-Z0-9]/.test(city)) {
    throw new Error("string is empty");
  }
  try {
    console.log("data");

    const data = await axios.get(
      `https://example.com/data/2.5/weather?${city}`,
    );
    console.log(data);
  } catch (error) {
    error;
  }

  // API url = `https://example.com/data/2.5/weather?...`
  // Use q parameter (city) at the end of the url in order to mock data correctly
  //return new Promise((resolve, reject) => {
  // Implement the function - call http request
  //   resolve(object_to_be_returned);
  // Implement the function
  //});
}
cityWeather("new york");

// module.exports = {
//   cityWeather,
// };
