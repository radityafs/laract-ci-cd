import fetcher from "../Utils/Fetcher";

const login = async (data) => {
  try {
    const response = await fetcher("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return error;
  }
};

const register = async (data) => {
  try {
    const response = await fetcher("register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export { login, register };
