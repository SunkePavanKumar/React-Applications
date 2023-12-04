/* eslint-disable react/prop-types */
import css from "../CSSModules/Container.module.css";
function Container(props) {
  return <div className={css.container}>{props.children}</div>;
}

export default Container;
