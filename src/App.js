import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import icon_i4g from "./resources/i4g.png";
import icon_zuri from "./resources/zuri.png";

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
    {
      title: "Contact",
      url: "/contact",
      id: "contact",
    },
  ];
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home links={links} />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
      <footer>
        <img src={icon_zuri} alt="" />
        <span>HNG Internship 9 Frontend Task</span>
        <img src={icon_i4g} alt="" />
      </footer>
    </Router>
  );
}

export default App;
