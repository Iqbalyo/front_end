import { actionTypes } from "../actionTypes";

const baseUrl = "http://localhost:3000";

export function login(params) {
  return async dispatch => {
    dispatch({ type: actionTypes.SEARCH_REQUEST });
    try {
      const response = await fetch(baseUrl + "/monitoring/unama/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      const token = data.accessToken
      const nim = data.nim
      const nama = data.nama
      console.log("Data tokennya : ", token)
      // Simpan token ke localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("nim", nim);
      localStorage.setItem("nama", nama);
      // Dispatch hasil ke Redux
      dispatch({ type: actionTypes.SEARCH_SUCCESS, payload: data.data });

      // Kembalikan data agar komponen tahu login berhasil
      return data;
    } catch (error) {
      // Dispatch error ke Redux
      dispatch({ type: actionTypes.SEARCH_FAILED, payload: error.message });
      throw error; // Lempar error ke komponen
    }
  };

}


//absen
export function getAbsensiById(params) {
  return async dispatch => {
      dispatch({ type: actionTypes.GET_INFORMASIABSENSI_REQUEST});
      try {
          const response = await fetch(`${baseUrl}/monitoring/unama/v1/absensi/${params}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
          if (response.status === 403) {
              window.location.href = '/login';
              return;
          }
          const res = await response.json();
          console.log("data : ", res)
          console.log("Response Data:", res.data);
          dispatch({ type: actionTypes.GET_INFORMASIABSENSI_SUCCESS, payload: res.data });
      } catch (error) {
          dispatch({ type: actionTypes.GET_INFORMASIABSENSI_FAILED, payload: error.message });
      }
    };
}

//ipk
export function getIpkByNim() {
  return async dispatch => {
      dispatch({ type: actionTypes.GET_IPK_REQUEST});
      try {
        const nim = localStorage.getItem('nim')
          const response = await fetch(`${baseUrl}/monitoring/unama/v1/ipk/dataipk`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(nim),
          });
          
          const res = await response.json();
          console.log("data data : ", params)
          console.log("Response Data:", res.data);
          dispatch({ type: actionTypes.GET_IPK_SUCCESS, payload: res.data });
      } catch (error) {
          dispatch({ type: actionTypes.GET_IPK_FAILED, payload: error.message });
      }
    };
}
