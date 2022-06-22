import ApiAgent from "../../../apiAgent";

export const getResult = async (code) => {
  return await ApiAgent.get("/results", {}, code);
};

export const getVotes = async (code, club_id) => {
  console.log(club_id);
  return await ApiAgent.get(`/results/vote/${club_id}`, {}, code);
};

export const postVotes = async (code, clubId) => {
  return await ApiAgent.post(
    `/results/vote`,
    {
      clud_id: clubId,
    },
    code
  );
};
