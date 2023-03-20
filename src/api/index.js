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

const addFavorite = async (aFav) => {
  try {
    const response = await fetch(`${URL}/favorites/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
          {
          ...aFav
        }
      ),
    });
    return await response.json();
  } catch (error) {
    console.log("error on addFavorite", error);
  }
};

const filterPlaces = async(textFilter)=>{
  try {
    const response = await fetch(`${URL}/places/search/multi?name=${textFilter}`);
    return await response.json();
  } catch (error) {
    console.log("error on getFilterPlaces", error);
  }
}

const getFavoritesUser = async (pId) => {
  try {
    const response = await fetch(`${URL}/favorites/user/${pId}`);
    return await response.json();
    
  } catch (error) {
    console.log("error on getFavoritesUser", error);
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

const createPlace = async (aPlace) => {
  try {
    const response = await fetch(`${URL}/places/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...aPlace
      }),
    });
    return await response.json();
  } catch (error) {
    console.log("error on getLogin", error);
  }
};

const getAPlace = async (pId) => {
  try {
    const response = await fetch(`${URL}/places/${pId}`);
    return await response.json();
  } catch (error) {
    console.log("error on getAPlace", error);
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

const getAEvent = async (pId) => {
  try {
    const response = await fetch(`${URL}/events/${pId}`);
    return await response.json();
  } catch (error) {
    console.log("error on getAEvent", error);
  }
};

const deleteFavorite = async (pId) => {
  try {
    const response = await fetch(`${URL}/favorites/delete/${pId}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.log("error on deleteFavorite", error);
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
  getAllEventsForUser,
  getAEvent,
  getAPlace,
  createPlace,
  filterPlaces,
  getFavoritesUser,
  addFavorite,
  deleteFavorite
};