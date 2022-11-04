import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import "./App.css";
import icon_i4g from "./resources/i4g.png";
import icon_zuri from "./resources/zuri.png";
import icon_twitter from "./resources/twitter.png";
import icon_slack from "./resources/slack.png";
import icon_github from "./resources/github.png";

function Home({ links }) {
  const CreateLinks = ({ links }) => {
    return (
      <div className="links">
        {links.map((val) => {
          return (
            <a href={val.url} className="link" key={val.id} id={val.id} title={val.subtext}>
              {val.title}
            </a>
          );
        })}
      </div>
    );
  }
  return (
    <div className="App">
      <header>
        <img src={icon_twitter} alt="" id="profile__img" />
        <span id="twitter">LekanA_O</span>
        <span id="slack" style={{ display: "none" }}>
          cruize_
        </span>
      </header>
      <CreateLinks links={links} />
      <div className="social">
        <a href="https://hngi9.slack.com/">
          <img src={icon_slack} alt="slack" />
        </a>
        <a href="https://github.com/coder-cruize">
          <img src={icon_github} alt="github" />
        </a>
      </div>
      <footer>
        <img src={icon_zuri} alt="" />
        <span>HNG Internship 9 Frontend Task</span>
        <img src={icon_i4g} alt="" />
      </footer>
    </div>
  );
}
function Contact(){
  return(
    <b>Hello from contact</b>
  )
}
function App() {
  const links = [
    { title: "Twitter Link", url: "https://twitter.com/LekanA_O", id: "twitter" },
    { title: "Zuri Team", url: "https://training.zuri.team/", id: "btn__zuri" },
    {
      title: "Zuri Books",
      url: "https://training.zuri.team/",
      id: "books",
      subtext: "This is where you find books about design and coding",
    },
    { title: "Python Books", url: "https://books.zuri.team/", id: "book__python" },
    {
      title: "Background Check for Coders",
      url: "https://books.zuri.team/python-for-beginners?ref_id=Lekan Alowooja",
      id: "pitch",
      subtext: "GoodHire is an engaging and easy-to-use interface to perform background checks on coders.",
    },
    {
      title: "Design Books",
      url: "https://books.zuri.team/design-rules",
      id: "book__design",
      subtext:
        "The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified.",
    },
  ];
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home links={links} />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
    </Router>
  );
}

export default App;
