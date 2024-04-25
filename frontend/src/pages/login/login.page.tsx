import Text from "../../components/base/text/text.tsx";
import Input from "../../components/base/input/input.tsx";
import {useState} from "react";
import Button from "../../components/base/button/button.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Split from "../../components/layout/split/split.tsx";

const LoginPage = () => {

    const [username, setUsername] = useState<string>("")
    const [usernameMessage, setUsernameMessage] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordMessage, setPasswordMessage] = useState<string>("")

    return (
        <>
            <Linear>
                <div>
                    <Input value={username} setValue={setUsername} type="text" label="Username" required={true}
                           placeholder="dachfeister" message={usernameMessage}/>
                    <Input value={password} setValue={setPassword} type="password" label="Password" required={true}
                           placeholder="iloveyou" message={passwordMessage}/>
                </div>
                <Button onClick={() => {}} highlight={false}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Login</Text>
                </Button>
            </Linear>
        </>
    )
}

export default LoginPage;
