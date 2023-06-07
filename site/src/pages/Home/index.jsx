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
  componentDidMount() {}

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
    return (
      <div className="home">
        <div className="Movie">
          <video autoPlay loop muted playsInline className="movie">
            <source src={movie} type="video/mp4" />
          </video>
        </div>
        <div className="about">
          <div className="aboutTitle">富士樱花度假村</div>
          <div className="aboutContent">
            <div className="content">体验度假乐趣</div>
            <div className="content">尽享别墅生活</div>
          </div>
          <div className="aboutFoot">
            “富士樱花度假村”静谧舒适，尽显南阿尔卑斯山壮美景色。这里有多彩的自然风光，水流山涧，天然森林和宏伟的舍农索城堡，让您尽情享受大自然的美妙。
          </div>
        </div>
        <div className="hotel">
          <div className="hotelImg">
            <img src="./hotel1.jpg"></img>
          </div>
          <div className="hotelContent">
            <div className="conTitle">[关于酒店]</div>
            <div className="conTitle1">酒店</div>
            <div className="conContent">
              <p>精选四款雅致客房</p>
              <p>根据需求精确匹配</p>
              <p>提供精致餐饮</p>
              <p>完美住宿选择</p>
            </div>
            <div className="btnMore">查看更多</div>
          </div>
        </div>
        <div className="minsu">
          <div className="hotelContent">
            <div className="conTitle">[关于民宿]</div>
            <div className="conTitle1">民宿</div>
            <div className="conContent">
              欢迎来到我们的高雅民宿，十间精心设计的客房，全部允许携带宠物。与您的伙伴共享奢华，尽享宠物友好的空间和专属待遇。愉悦花园、宽敞庭院，为您与宠物创造难忘时刻。在这里，您的宠物将得到无微不至的关怀，与您共度珍贵时光。
            </div>
            <div className="btnMore">查看更多</div>
          </div>
          <div className="hotelImg">
            <img src="./minsu1.jpg"></img>
          </div>
        </div>
        <div className="meishi">
          <div className="hotelImg">
            <img src="./meishi1.jpg"></img>
          </div>
          <div className="hotelContent">
            <div className="conTitle">[关于美食]</div>
            <div className="conTitle1">美食</div>
            <div className="conContent">
              您可以品尝到意大利菜和日本料理。我们的菜单根据季节和供应情况而变化，以保证您品尝到最新鲜的食材。此外，我们还提供烧烤场，让您享受烧烤的乐趣。
            </div>
            <div className="btnMore">查看更多</div>
          </div>
        </div>
        <div className="wanle">
          <div className="hotelContent">
            <div className="conTitle">[关于玩乐]</div>
            <div className="conTitle1">玩乐</div>
            <div className="conContent">
              我们提供多种玩乐设施，包括室内游泳池、网球场、卡丁车等。此外，我们还有多功能厅、狗跑道和热水浴设施等设施。如果您喜欢野营，我们也支持在营地中享受春夏凉爽舒适的氛围，秋冬则可以尽情欣赏星空。
            </div>
            <div className="btnMore">查看更多</div>
          </div>
          <div className="wanleImg">
            <p className="img01">
              <img src="./wanle1.jpg"></img>
            </p>
            <p className="img02">
              <img src="./tennis1.jpg"></img>
            </p>
          </div>
        </div>
        <div className="info">
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
        </div>
      </div>
    );
  }
}
export default Home;
