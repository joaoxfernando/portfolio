import ProfileCards from "../ProfileCard/ProfileCard"
import ExperiencesCard from "../ExperiencesCard/ExperiencesCard"

export default function PortfolioColumns() {
    return (
        <div className="columns has-background-grey-lighter">
            <div className="column">
                    <ProfileCards
                    imageUrl = "https://avatars.githubusercontent.com/u/31867867?v=4"
                    />
            </div>
            <div className="column is-three-quarters">
                <ExperiencesCard/>
            </div> {/* Comentário */}
        </div>
    )
}