import React from "react";
import "./index.scss";
import { Carousel } from "antd";
import movie from "./movie.mp4";
const contentStyle = {};
class Home extends React.Component {
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
  onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  render() {
    return (this.state.homePage.about&&
      <div className="home">
        <div className="Movie">
          <video autoPlay loop muted playsInline className="movie">
            <source src={movie} type="video/mp4" />
          </video>
        </div>
        <div className="about">
          <div className="aboutTitle">{this.state.homePage.about.title}</div>
          <div className="aboutContent">
            <div className="content">{this.state.homePage.about.title1[0]}</div>
            <div className="content">{this.state.homePage.about.title1[1]}</div>
          </div>
          <div className="aboutFoot">
          {this.state.homePage.about.content}
          </div>
        </div>
        <div className="hotel">
          <div className="hotelImg">
            <img src="./hotel1.jpg"></img>
          </div>
          <div className="hotelContent">
            <div className="conTitle">お部屋</div>
            <div className="conTitle1"> Our Rooms</div>
            <div className="conContent">
              <div className="text">{this.state.homePage.text.hotel}</div>
              <div className="btnMore">View More</div>
            </div>
          </div>
        </div>
        <div className="minsu">
        <div className="hotelImg">
            <img src="./minsu1.jpg"></img>
          </div>
          <div className="hotelContent">
            <div className="conTitle">みんしゅく</div>
            <div className="conTitle1">Guesthouse</div>
            <div className="conContent">
            <div className="text">{this.state.homePage.text.minsu}</div>
            <div className="btnMore">View More</div>
            </div>
          </div>
        </div>
        <div className="hotel">
          <div className="hotelImg">
            <img src="./meishi1.jpg"></img>
          </div>
          <div className="hotelContent">
            <div className="conTitle">びしょく</div>
            <div className="conTitle1">Delicious Food</div>
            <div className="conContent">
            <div className="text">{this.state.homePage.text.food}</div>
            <div className="btnMore">View More</div>
              
            </div>
          </div>
        </div>
        <div className="minsu">
        <div className="hotelImg">
            <img src="./tennis1.jpg"></img>
          </div>
          <div className="hotelContent">
            <div className="conTitle">あそび</div>
            <div className="conTitle1">Recreation</div>
            <div className="conContent">
            <div className="text">{this.state.homePage.text.play}</div>
            <div className="btnMore">View More</div>
            </div>
          </div>
        </div>
        {/* <div className="info">
          <Carousel afterChange={this.onChange}>
            <div>
              <h3 className="contentStyle">
                <div className="title">小屋(带阁楼)</div>
                <div>
                  <img src="./c01_floor.png" width={500}></img>
                </div>
                <div className="content">
                  <div className="conInner">
                    <div className="left">容量</div>
                    <div className="right">最多5人/宠物可以（小型犬）</div>
                    <div className="left0">房间数</div>
                    <div className="right0">4间（卧室：双床/双人间）</div>
                  </div>
                  <div className="conInner">
                    <div className="left">基本设备</div>
                    <div className="right">
                      浴室、小厨房、电视、冰柜/冰箱（小）、空调。
                    </div>
                  </div>
                  <div className="conInner">
                    <div className="left">便利设施</div>
                    <div className="right">
                      面巾、浴巾、浴垫、牙刷、沐浴露、洗发水、护发素、吹风机
                    </div>
                  </div>
                  <div className="conInner">
                    <div className="left">炊具/餐具</div>
                    <div className="right">
                      微波炉、烤面包机、电磁炉、锅、台式燃气灶（无气瓶）、平底锅（大/小）、水壶、盘子（大/小）
                    </div>
                  </div>
                  <div className="conInner">
                    <div className="left">常规用品</div>
                    <div className="right">
                      {" "}
                      刀、砧板、勺子、抹刀、开瓶器、开罐器、开瓶器、饭勺、碗、冰桶、剪刀、筷子、勺子、叉子等。
                    </div>
                  </div>
                </div>
              </h3>
            </div>
            <div>
              <h3 className="contentStyle">小屋(带阁楼)</h3>
            </div>
            <div>
              <h3 className="contentStyle">小屋(无阁楼)</h3>
            </div>
            <div>
              <h3 className="contentStyle">出租别墅</h3>
            </div>
          </Carousel>
        </div> */}
      </div>
    );
  }
}
export default Home;
