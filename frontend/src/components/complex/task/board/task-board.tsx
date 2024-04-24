import "./task-board.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";

const TaskBoard = () => {
    return (
        <div className="task-board">
            <div className="task-board__column">
                <Text type="h3" mono={false} bold={true} highlight={true}>Ideas</Text>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="task-board__column">
                <Text type="h3" mono={false} bold={true} highlight={true}>ToDo's</Text>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="task-board__column">
                <Text type="h3" mono={false} bold={true} highlight={true}>Waiting</Text>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="task-board__column">
                <Text type="h3" mono={false} bold={true} highlight={true}>In progress</Text>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="task-board__column">
                <Text type="h3" mono={false} bold={true} highlight={true}>Done</Text>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
                <Link to="/tasks/1234">
                    <div className="task-board__item">
                        <Text type="s" mono={true} bold={false} highlight={false}>HIGH</Text>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Dockerize Webserver 5</Text>
                            <Text type="s" mono={false} bold={false} highlight={false}>Umbricht</Text>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TaskBoard
