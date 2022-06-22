import { createContext, useContext } from "react";
import ApiAgent from "../../apiAgent";
import { useQuery } from "react-query";

const getUser = async (code) => await ApiAgent.get("/user", {}, code);

const UserContext = createContext({
  name: "존재하지 않는 유저",
  userType: "CLUB", // "CLUB" | "TEACHER"
});

const UserProvider = ({ children }) => {
  const code = window.location.pathname.split("/")[1];
  const { data } = useQuery("getUser", () => getUser(code));
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUser = () => {
  const userData = useContext(UserContext);
  return { userData };
};
