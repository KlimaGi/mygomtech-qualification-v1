require("dotenv").config();
import getUrl from "../../utils/getUrl";
import { API } from "../../constants";

test("should return correct url for server", () => {
  const url = getUrl(API.Login);
  expect(url).toMatch("http://localhost:9003/api/login");
});

test("shoul return correct server url with params", () => {
  const url = getUrl(API.Login, { a: 5, b: 12 });
  expect(url).toMatch("http://localhost:9003/api/login?a=5&b=12");
});
