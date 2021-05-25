import * as React from "react";
import useSystemStore from "@store/system";
import content from './content.yaml';
import './style.scss';
import { Link } from "gatsby"

export interface NavProps {
  primary?: boolean;
}

const Nav = ({
  primary
}: NavProps) => {
  const darkMode = useSystemStore(state => state.darkMode);

  console.log(darkMode, primary)
  console.log(content)
  return (
    <div className='navContainer'>
      aahhh what the hell
      {content.navItems.map(item => {
        <div className={'navItem'}>
          <Link to={item.route}><h3>{item.label}</h3></Link>
        </div>
      })}
    </div >
  );
}

export default Nav;