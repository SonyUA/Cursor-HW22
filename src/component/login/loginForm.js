import { Logotype } from "../Logotype";
import { Form, Input, LogoText, InputCheckbox, Label, FlexBox, Button, Copyright } from "../StyledComponent";
import { Link } from "react-router-dom";
export const LoginForm = () => {
    return (
        <>
            <Logotype />
            <LogoText>Sign in</LogoText>
            <Form action="">
                <Input type={"email"} placeholder={"Email Address *"} />
                <Input type={"password"} placeholder={"Password *"} />
                <br></br>
                <FlexBox>
                    <InputCheckbox type={"checkbox"} id="remember" />
                    <Label htmlFor="remember"> Remember me</Label>
                </FlexBox>
                <Button>Sign in</Button>
                <FlexBox spaceBetween>
                    <Link>Forgot Paswword?</Link>
                    <Link to="/registration">Dont have an account? Sign Up</Link>
                </FlexBox>
                <Copyright>Copyright @ Your Website 2020.</Copyright>
            </Form>
        </>
    );
};
