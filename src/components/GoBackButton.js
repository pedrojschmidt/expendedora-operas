import {useNavigate} from "react-router-dom";
import './GoBackButton.css'
import {HiArrowSmallLeft} from "react-icons/hi2";

const GoBackButton = () => {

    const navigate = useNavigate()

    return(
        <button className="go-back" onClick={() => navigate(-1)}>
            <HiArrowSmallLeft size={"2vw"}/>
        </button>
    )
}

export default GoBackButton