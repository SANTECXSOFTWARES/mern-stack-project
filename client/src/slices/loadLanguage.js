import { setMessages } from "../util";
import contentFile from "../resources/content/content.json";

const loadLanguage = () => {
  const url = contentFile;
  const options = {
    method: "GET",
    credential: "include",
  };
  return fetch(url, options).then((response) => {
    if (response.status !== 200) {
      return;
    }
    return response
      .json()
      .then((json) => {
        setMessages(json);
        return json;
      })
      .catch((err) => {
        console.log("Language error");
        return err;
      });
  });
};

export default loadLanguage;
