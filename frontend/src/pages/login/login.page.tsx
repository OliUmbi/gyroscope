import Text from "../../components/base/text/text.tsx";
import Input from "../../components/base/input/input.tsx";
import {useEffect, useState} from "react";
import Button from "../../components/base/button/button.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import useApi from "../../hooks/use-api.ts";
import {Method} from "../../enums/method.enum.ts";
import {storage} from "../../services/storage.ts";
import {useNavigate} from "react-router-dom";
import {AuthenticationRequest} from "../../requests/authentication.request.ts";
import {AuthenticationResponse} from "../../responses/authentication.response.ts";

const LoginPage = () => {

    const navigate = useNavigate();

    const [authentication, authenticationData] = useApi<AuthenticationResponse>()

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    useEffect(() => {
        if (authenticationData) {
            storage.set("profileId", authenticationData.profileId)
            storage.set("token", authenticationData.token)
            storage.set("expires", authenticationData.expires)

            navigate("/")
        }
    }, [authenticationData]);

    const login = () => {
        let request: AuthenticationRequest = {
            name: name,
            password: password
        }

        authentication("authentication/login", Method.POST, undefined, request)
    }

    return (
        <>
            <Linear>
                <div>
                    <Input value={name} setValue={setName} type="text" label="Name" required={true} placeholder="Dachfeister" message=""/>
                    <Input value={password} setValue={setPassword} type="password" label="Password" required={true} placeholder="iloveyou" message=""/>
                </div>
                <Button onClick={login} highlight={false}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Login</Text>
                </Button>
            </Linear>
        </>
    )
}

export default LoginPage;
