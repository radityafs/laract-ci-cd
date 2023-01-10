import fetcher from "../Utils/Fetcher";

const getSiswa = async (page = 1, search) => {
  try {
    const response = await fetcher(
      `siswa/?page=${page}${search ? "&search=" + search : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

const getSiswaDetail = async (id) => {
  try {
    const response = await fetcher(`siswa/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const putSiswaDetail = async (data) => {
  try {
    const response = await fetcher(`siswa/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: JSON.stringify(data),
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const postSiswa = async (data) => {
  try {
    const response = await fetcher(`siswa`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: JSON.stringify(data),
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const deleteSiswa = async (id) => {
  try {
    const response = await fetcher(`siswa/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export { getSiswa, getSiswaDetail, putSiswaDetail, postSiswa, deleteSiswa };
