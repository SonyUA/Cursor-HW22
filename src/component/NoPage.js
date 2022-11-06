import { Link } from "react-router-dom";
import { Oops } from "./StyledComponent";
export const NoPage = () => {
    return (
        <>
            <Oops>
                Якщо невідображається сторінка??,<br></br>
                то це не я а Github<br></br>
                <Link font to="/">
                    Повернутись жми сюда)
                </Link>
            </Oops>
        </>
    );
};
