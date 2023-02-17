import { useEffect, useState, useTransition } from "react";
import { useSelector } from "react-redux";

export default function useAuth(): boolean[] {
  let [isLoggedin, setIsLoggedIn] = useState(false);
  let userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  let userToken = JSON.parse(localStorage.getItem("token") || "{}");
  const { isLoading, user, error, authToken } = useSelector(
    (state: any) => state.login
  );
  useEffect(() => {
    if (userInfo && userToken) {
      setIsLoggedIn(true);
      console.log("logged in successfully");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return [isLoggedin];
}
