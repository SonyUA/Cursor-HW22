import { LogoCircle } from "./StyledComponent";
import logo from "./img/padlock.png";
export const Logotype = () => {
    return (
        <LogoCircle>
            <img src={logo} alt="" />
        </LogoCircle>
    );
};
