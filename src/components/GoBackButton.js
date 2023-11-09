import {useNavigate} from "react-router-dom";
import {BiLeftArrowAlt} from "react-icons/bi";
import './GoBackButton.css'
import {BsArrowLeft} from "react-icons/bs";
import {HiArrowSmallLeft} from "react-icons/hi2";

const GoBackButton = () => {

    const navigate = useNavigate()

    return(
        <button className="go-back" onClick={() => navigate(-1)}>
            {/*<BiLeftArrowAlt size={"3vw"}/>*/}
            {/*<BsArrowLeft size={"3vw"}/>*/}
            <HiArrowSmallLeft size={"2vw"}/>
        </button>
    )
}

export default GoBackButton