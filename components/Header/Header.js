import Link from "next/link"

export default function Header(props) {
    return (
        <div>
            <header><title>{props.title}</title>
            <script type="text/javascript" src="/scripts/bulma.js" defer></script>
            <nav className="navbar" role="navigation" aria-label="main dropdown navigation">
                <div className="navbar-brand">
                    <Link href={props.link || '/'}>
                        <a className="navbar-item">
                            <span className="title is-4 has-text-black-bis">Dev João Fernando</span>
                        </a>
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true is-danger"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link href={props.about || '/sobre'}>
                        <a className="navbar-item">
                            Sobre
                        </a>
                        </Link>

                        <Link href={props.contact || '/contato'}>
                        <a className="navbar-item">
                            Contato
                        </a>
                        </Link>
                    </div>
                </div>
            </nav>
            </header>
        </div>
    )
}