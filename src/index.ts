import { Api } from "./Api";

const main = async () => {
  const api = new Api({ baseUrl: "https://httpbingo.org" });
  const response = await api.post.uploadFile({ file: new File([], "file") });
  console.log(response);
};

main();
