import { PureComponent } from "react";

class ClassComp extends PureComponent {
  constructor() {
    super();
  }
  render() {
    console.log("Class Component");
    return (
      <div>
        <div>Class Component Count : {}</div>
      </div>
    );
  }
}
export default ClassComp;
