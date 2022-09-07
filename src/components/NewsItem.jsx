import PropTypes from 'prop-types'
import { BiTimeFive } from "react-icons/bi"

export const NewsItem = ({ author, created, title, url }) => {

    const newsDate = created.slice(0,10)
    const newsFullHour = created.slice(11,19)
    const newsHourMin = newsFullHour.slice(0,5)

    const handleClick = () => {
        $(document).ready(() => {
            $("img").click((e) => {
                $("img").toggleClass("backImage")
            })
        })
    }

    const handleClickContainerText = () => {
        window.open(url,"_blank")
    }

    {
        if ( author, created, title, url ) {
            return (
                <>
                    <div className="container-news" >
                        <div className="container-text" onClick={ handleClickContainerText }>
                            <p className="p1"><BiTimeFive/>{` Posted on ${newsDate} at ${newsHourMin} by ${author}`}</p>
                            <p className="p2">{title}</p>
                        </div>
                        <div className="container-liked-button">
                            <div className="liked-button" id="containerHeartId">
                                <img 
                                    src="../../public/imgs/outline-heart.svg" 
                                    alt="heart" 
                                    className="img-liked"
                                    id="heartId"
                                    onClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}


NewsItem.propTypes = {
    author: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
