function Header() {
    return (
        <header>
            <div className="container-fluid d-flex justify-content-between align-items-center p-2 flex-column flex-md-row">
                <a className="navbar-brand fw-bolder fs-3 text-uppercase" href="#">The Know</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header