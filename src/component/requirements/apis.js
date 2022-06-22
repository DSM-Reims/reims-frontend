import ApiAgent from "../../apiAgent/index";

export const postObjectApply = async (code, { goodsName, url, clubName }) =>
  await ApiAgent.post(
    "/goods",
    {
      goodsName,
      url,
      clubName,
    },
    code
  );

export const getObjects = async (code, { filter }) =>
  await ApiAgent.get(
    "/goods",
    {
      page: 1,
      limit: 99999999,
      filter,
    },
    code
  );

export const deleteObject = async (code, { applicationId }) =>
  await ApiAgent.delete(`/goods/${applicationId}`, {}, code);
