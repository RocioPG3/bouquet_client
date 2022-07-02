import { slide as Menu } from "react-burger-menu";
import Navlinks from "./Navlinks";

export default function Burguer() {
  return (
    <div>
      <Menu>
        <Navlinks />
      </Menu>
    </div>
  );
}
