import "./authentication-invalid.scss";
import Text from "../../../base/text/text.tsx";
import Button from "../../../base/button/button.tsx";
import useStorage from "../../../../hooks/use-storage.ts";
import {useEffect, useState} from "react";
import {dateConvert} from "../../../../utils/date.util.ts";
import {useNavigate} from "react-router-dom";

const AuthenticationInvalid = () => {

    const navigate = useNavigate()

    const [token] = useStorage("token")
    const [expires] = useStorage("expires")

    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {

        if (token) {
            setVisible(false)

            if (expires) {
                if (dateConvert(expires).getTime() < Date.now()) {
                    setVisible(true)
                }
            }
        } else {
            setVisible(true)
        }

    }, [token, expires]);

    return (
        <div className="authentication-invalid" style={{display: visible ? "block" : "none"}}>
            <Button onClick={() => navigate("/login")} highlight={true}>
                <Text type="p" mono={false} bold={true} highlight={true}>Invalid Session</Text>
                <Text type="s" mono={false} bold={true} highlight={false}>Go to login Page</Text>
            </Button>
        </div>
    )
}

export default AuthenticationInvalid;
