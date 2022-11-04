import icon_twitter from "../resources/twitter.png";
import icon_slack from "../resources/slack.png";
import icon_github from "../resources/github.png";

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
    </div>
  );
}
export default Home