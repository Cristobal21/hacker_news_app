
export const NewsVueItem = ({ author, created, title, url }) => {

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
                            <p>{`${created} ago by ${author}`}</p>
                            <p>{title}</p>
                        </div>
                        <div className="container-liked-button">
                            <div className="liked-button" id="containerHeartId">
                                <img 
                                    src="../public/imgs/outline-heart.svg" 
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
