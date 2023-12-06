import { useContext } from "react";
import { ContentSwitch } from "../Contexts/ContentSwitch";

function Sidebar() {
  const { setSwitchContent, switchContent } = useContext(ContentSwitch);

  function changeContent(content) {
    setSwitchContent(content);
  }
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar"
      style={{ width: 280 }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link text-white home ${
              switchContent === "home" && "active"
            }`}
            aria-current="page"
            onClick={() => changeContent("home")}
          >
            <svg className="bi pe-none me-2" width={16} height={16}>
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white post  ${
              switchContent === "post" && "active"
            }`}
            onClick={() => changeContent("post")}
          >
            <svg className="bi pe-none me-2" width={16} height={16}>
              <use xlinkHref="#speedometer2" />
            </svg>
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
