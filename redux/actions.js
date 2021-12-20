export const LOGIN = "LOGIN";

// action
export const login = jwt => {
    return {
        type: LOGIN,
        jwt
      };
  
};

// action creator
export const callApi = (url, Params, action) => {
    return dispatch =>fetch(url, Params)
      .then(async (response) => {
        if (response.status === 201) {
          let responseJson = await response.json();
          dispatch(action(responseJson.data.jwt));
          console.log("action dispatched", responseJson.data.jwt)
        }
      })
      .catch((error) => {
        console.log(error);
      });

}
