import { useParams } from "react-router-dom";

export const useCode = () => {
  const { code } = useParams();
  return { code };
};
