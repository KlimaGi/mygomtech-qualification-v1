/**
 * @jest-environment jsdom
 */
import "jsdom-global";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import App from "../App";
import Login from "../components/Login/Login";
import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";

describe("<App />", () => {
  test("should render a Login", () => {
    const component = shallow(
      <MemoryRouter>
        <PublicRoute />
      </MemoryRouter>
    );
    expect(component.find(Login)).toHaveLength(1);
  });
});
