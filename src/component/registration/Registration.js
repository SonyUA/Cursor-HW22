import { Form, Input, LogoText, InputCheckbox, Label, FlexBox, Button, Copyright } from "../StyledComponent";
import { Logotype } from "../Logotype";
import { Link } from "react-router-dom";
export const RegistrationForm = () => {
    return (
        <>
            <Logotype />
            <LogoText primary>Sign up</LogoText>
            <Form action="">
                <FlexBox spaceBetween>
                    <Input litleWidth type={"name"} placeholder={"First Nmae *"} />
                    <Input litleWidth type={"name"} placeholder={"Last Name *"} />
                </FlexBox>
                <Input Width type={"email"} placeholder={"Email Address *"} />
                <Input Width type={"password"} placeholder={"Password *"} />
                <br></br>
                <FlexBox>
                    <InputCheckbox type={"checkbox"} id="remember" />
                    <Label htmlFor="remember">
                        I want toreceive inspiration, marketing<br></br>
                        promotion and updatesvia email.
                    </Label>
                </FlexBox>
                <Button widthHeight>Sign up</Button>
                <FlexBox end>
                    <Link font to="/">
                        Already have an account? Sign in
                    </Link>
                </FlexBox>
                <Copyright font>Copyright @ Your Website 2020.</Copyright>
            </Form>
        </>
    );
};
