import { FlexContainer } from "./component/StyledComponent";
import { LoginForm } from "./component/login/loginForm";
import { RegistrationForm } from "./component/registration/Registration";
import { NoPage } from "./component/NoPage";
import { GlobalS } from "./component/GlobalStyle";
import { Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <FlexContainer>
            <GlobalS />
            <Routes>
                <Route path="/" element={<LoginForm />}></Route>
                <Route path="/registration" element={<RegistrationForm />}></Route>
                <Route path="*" element={<NoPage />}></Route>
            </Routes>
        </FlexContainer>
    );
};

export default App;
