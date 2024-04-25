import {useNavigate} from "react-router-dom";
import Button from "../../components/base/button/button.tsx";
import Text from "../../components/base/text/text.tsx";

const NotFoundPage = () => {

  const navigate = useNavigate()

  return (
      <>
        <Button onClick={() => navigate(-1)} highlight={false}>
          <Text type="p" mono={false} bold={true} highlight={true}>Go back</Text>
        </Button>
      </>
  )
}

export default NotFoundPage;
