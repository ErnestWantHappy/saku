import React from "react";
import "./index.scss";

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.mainStore;
    this.state = {
      homePage: {},
      data1: {},
      data2: {},
      data3: {},
      msg1: "aha",
    };
  }
  //生命周期函数，在render之前执行
  componentWillMount() {
    this.setState({
      homePage: this.props.homePage,
      data1: this.props.dataImg1,
      data2: this.props.dataImg2,
      data3: this.props.dataImg3,
    });
  }

  //生命周期函数在组件挂载后（插入 DOM 树中）立即调用。render之后
  componentDidMount = async (e) => {};

  //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  componentWillUpdate() {
    setTimeout(() => {
      this.setState({
        homePage: this.props.homePage,
        data1: this.props.dataImg1,
        data2: this.props.dataImg2,
        data3: this.props.dataImg3,
      });
    }, 500);
  }

  render() {
    return (
      <div className="Hotel">hotel页面</div>
    );
  }
}
export default Hotel;
