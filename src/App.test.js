import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<>", () => {
  test("Test", () => {
    expect(1).toEqual(1);
  });
});
