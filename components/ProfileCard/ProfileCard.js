export default function ProfileCards(props) {
    return (
        <div>
            <div className="card card-profile has-background-white-ter">
                <div className="card-image">
                    <figure className="image is-4by4">
                    <img src={props.imageUrl} alt="João Fernando"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={props.imageUrl} alt="João Fernando"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">João Fernando</p>
                        <p className="subtitle is-6">@joaoxfernando</p>
                    </div>
                    </div>

                    <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a href="https://github.com/joaoxfernando" target="_blank">@joaoxfernando</a>.
                    <br/>
                    <time dateTime="2016-1-1">11:48 - 19 Dec 2021</time>
                    </div>
                </div>
                </div>

        </div>
    )
}