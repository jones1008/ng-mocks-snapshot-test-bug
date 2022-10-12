import {HelloComponent} from "./hello.component";
import {AppModule} from "../app.module";
import {MockBuilder, MockRender} from "ng-mocks";

describe('HelloComponent', () => {
  beforeEach(() => {
    return MockBuilder(HelloComponent, AppModule);
  });

  it('should render component correctly with Joe', () => {
    const fixture = MockRender(HelloComponent, {name: 'Joe'});
    expect(fixture).toMatchSnapshot()
  });

  it('should render component correctly with other name', () => {
    const fixture = MockRender(HelloComponent, {name: 'Jane'});
    expect(fixture).toMatchSnapshot()
  });
});
