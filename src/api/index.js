const URL = "http://ec2-44-200-15-255.compute-1.amazonaws.com:4000";

const addRegister = async (aUser) => {
  try {
    console.log(aUser)
    const response = await fetch(`${URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
          {
          ...aUser
        }
      ),
    });
    return await response.json();
  } catch (error) {
    console.log("error on addRegister", error);
  }
};

const getAUser = async (pId) => {
  try {
    const response = await fetch(`${URL}/users/profile/${pId}`);
    return await response.json();
  } catch (error) {
    console.log("error on getLogin", error);
  }
};

const getLogin = async (aUser) => {
  try {
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:aUser.email,
        password:aUser.password
      }),
    });
    return await response.json();
  } catch (error) {
    console.log("error on getLogin", error);
  }
};

const getAllPlaces = async () => {
  try {
    const response = await fetch(`${URL}/places`);
    return await response.json();
  } catch (error) {
    console.log("error on getAllPlaces", error);
  }
};
const getAllPlacesForUser = async (pId) => {
  try {
    const response = await fetch(`${URL}/places/user/${pId}`);
    return await response.json();
  } catch (error) {
    console.log("error on getAllPlacesForUser", error);
  }
};

const getAllEvents = async () => {
  try {
    const response = await fetch(`${URL}/events`);
    return await response.json();
  } catch (error) {
    console.log("error on getAllEvents", error);
  }
};

const getAllEventsForUser = async (pId) => {
  try {
    const response = await fetch(`${URL}/events/user/${pId}`);
    return await response.json();
  } catch (error) {
    console.log("error on getAllEventsForUser", error);
  }
};

export {
  addRegister,
  getAllPlaces,
  getAllEvents,
  getLogin,
  getAUser,
  getAllPlacesForUser,
  getAllEventsForUser
};