import * as React from "react";
// import useSystemStore from "@store/system";
// import useSystemStore from "../../store/system";
// import content from './content.yaml';
import style from './style.sass';
import { Link } from "gatsby"

export interface NavProps {
  primary?: boolean;
}

const Nav = ({
  primary
}: NavProps) => {
  // const darkMode = useSystemStore(state => state.darkMode);

  // console.log(darkMode, primary)
  return (
    <div className={style.navContainer}>
      {/* {content.navItems.map(item => {
        <div className={style.navItem}>
          <Link to={item.route}><h3>{item.label}</h3></Link>
        </div>
      })} */}
    </div>
  );
}

export default Nav;