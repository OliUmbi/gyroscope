import Text from "../../components/base/text/text.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Split from "../../components/layout/split/split.tsx";
import Button from "../../components/base/button/button.tsx";

const ProfilePage = () => {

    return (
        <>
            <Split>
                <Linear>
                    <Text type="h2" mono={false} bold={true} highlight={true}>Umbricht</Text>
                </Linear>
                <Linear>
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Logout</Text>
                    </Button>
                </Linear>
            </Split>
            <Split>
                <Linear>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>Ideas</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>1</Text>
                    </div>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>ToDo</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>0</Text>
                    </div>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>On Hold</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>2</Text>
                    </div>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>In Progress</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>2</Text>
                    </div>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>Done</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>2</Text>
                    </div>
                </Linear>
                <Linear>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>Critical</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>1</Text>
                    </div>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>High</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>0</Text>
                    </div>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>Medium</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>2</Text>
                    </div>
                    <div>
                        <Text type="s" mono={true} bold={false} highlight={false}>Low</Text>
                        <Text type="p" mono={false} bold={true} highlight={true}>2</Text>
                    </div>
                </Linear>
            </Split>
        </>
    )
}

export default ProfilePage;
