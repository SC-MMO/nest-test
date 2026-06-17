import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const callAPI = async (method: string, endpoint: string, data?: any) => {
  try {
    const response = await axios({
      method,
      url: `http://10.12.19.19:3000/api${endpoint}`,
      data,
      withCredentials: true,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

const PrivateRoutes = () => {
  const [auth, setAuth] = useState<{ token: boolean } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await callAPI("get", "/me");
      setAuth({ token: response.status === 200 });
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return auth?.token ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

async function logout() {
  await callAPI("post", "/logout");
  window.location.reload();
}

export { callAPI, PrivateRoutes, logout };
