export default function EachExperienceCard(props) {
    return (
        <div>
            <div className="card card-experience has-background-white-ter">
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                        <img src={props.portfolioImg} alt={props.name}/>
                        </figure>
                    </div>
                    <div className="media-content">

                        <div className="columns">
                            <div className="column is-three-quarters">
                            <p className="title is-5 is-size-5-mobile">{props.name}</p>
                            <p className="subtitle is-6 is-size-7-mobile">{props.socialMediaName}</p>
                            <span className="subtitle is-size-6 has-text-weight-semibold">Tecnologias</span><br/>
                            <span className="tag is-danger is-size-7-mobile">NextJS</span> 
                            <span className="tag is-dark is-size-7-mobile mx-1">MongoDB</span> 
                            <span className="tag is-info is-size-7-mobile ">NodeJS</span>
                            </div>

                            <div className="column">
                            <span className="is-size-6 is-size-7-mobile">
                                <time dateTime="2016-1-1">{props.date}</time>
                            </span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="content">
                    <p>{props.content}</p>
                    Conheça: <a href={props.siteUrl} target="_blank">{props.siteName}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}