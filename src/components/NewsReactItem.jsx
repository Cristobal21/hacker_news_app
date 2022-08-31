
export const NewsReactItem = ({ author, created, title, url }) => {


    return (
        <>
            <div className="container-news">
                <div className="container-text">
                    <p>{`${created} ago by ${author}`}</p>
                    <p>{title}</p>
                </div>
                <div className="container-liked-button">
                    <div className="liked-button"></div>
                </div>
            </div>
        </>
    )
}
