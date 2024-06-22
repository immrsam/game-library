import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e1bd93118d854bd2aefd670a8ce82766",
  },
});
