import Enzyme from "@types/enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import fetch from "@types/node-fetch";
global.fetch = fetch;
