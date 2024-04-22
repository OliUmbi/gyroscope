import Text from "../../components/base/text/text.tsx";
import Input from "../../components/base/input/input.tsx";
import {useState} from "react";
import Button from "../../components/base/button/button.tsx";

const LoginPage = () => {

    const [username, setUsername] = useState<string>("")
    const [usernameMessage, setUsernameMessage] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordMessage, setPasswordMessage] = useState<string>("")

    return (
        <>
            <div>
                <Input value={username} setValue={setUsername} type="text" label="Username" required={true}
                       placeholder="oliumbi" message={usernameMessage}/>
                <Input value={password} setValue={setPassword} type="password" label="Password" required={true}
                       placeholder="12345678" message={passwordMessage}/>
            </div>

            <div>
                <Button onClick={() => {}} highlight={false}>
                    <Text type="p" mono={false} bold={false} highlight={true}>Register</Text>
                </Button>
                <Button onClick={() => {}} highlight={true}>
                    <Text type="p" mono={false} bold={false} highlight={true}>Login</Text>
                </Button>
            </div>
        </>
    )
}

export default LoginPage;
