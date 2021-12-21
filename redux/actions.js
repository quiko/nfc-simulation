export const LOGIN = "LOGIN";
export const SCAN = "SCAN";

export const login = (jwt) => {
  return {
    type: LOGIN,
    payload: jwt,
  };
};

export const scan = (product) => {
  return {
    type: SCAN,
    payload: product,
  };
};

export const callApi = (url, Params, action) => {
  return (dispatch) =>
    fetch(url, Params)
      .then(async (response) => {
        if (response.status === 201 || response.status === 200) {
          let responseJson = await response.json();
          responseJson.product ?
          dispatch(action(responseJson.product))
          :
          dispatch(action(responseJson.data.jwt))
        }
      })
      .catch((error) => {
        console.log(error);
      });
};


  
