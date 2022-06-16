import ApiAgent from "../../apiAgent/index";

export const postObjectApply = (code, { goodsName, url, clubName }) =>
  ApiAgent.post(
    "/goods",
    {
      goodsName,
      url,
      clubName,
    },
    code
  );
