import ApiAgent from "../../../apiAgent";

export const postResult = async (code, params) => {
  const { data } = await ApiAgent.post(
    "/results",
    {
      ...params,
    },
    code
  );
  return data;
};

export const postVideo = async (code, files) => {
  const form = new FormData();
  form.append("data", files);
  console.log(files);
  await ApiAgent.patch("/results/video", form, code);
};

export const postPicture = async (code, files) => {
  const form = new FormData();
  form.append("data", files);
  await ApiAgent.patch("/results/picture", form, code);
};
