import {FaInfoCircle, FaPlaneDeparture} from "react-icons/fa";

const StaticFlightBooking = () => {
    return (
        <div className="container py-4">
            {/* Header */}
            <section
                className="p-4 p-md-5 rounded-2 mb-4 shadow-sm position-relative"
                style={{
                    background: "linear-gradient(135deg, #0d6efd 0%, #31c2ff 100%)",
                }}
            >
                <div className="position-absolute top-0 end-0 p-3">
                    <button type="button" className="btn btn-outline-light btn-sm">
                        Dark mode
                    </button>
                </div>
                <h1 className="text-white fw-bold mb-1">Find your next flight</h1>
                <p className="text-white-50 mb-0">Fast. Simple. Beautiful.</p>
            </section>

            {/* Search bar */}
            <form className="card shadow-sm border-0 mb-4">
                <div className="card-body">
                    <div className="row g-2 g-md-3 align-items-end">
                        <div className="col-12 col-md-3">
                            <small className="text-danger"></small>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text">From</span>
                                <input className="form-control" placeholder="e.g., ARN"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <small className="text-danger"></small>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text">To</span>
                                <input className="form-control" placeholder="e.g., LHR"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <small className="text-danger"></small>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text">📅</span>
                                <input type="date" className="form-control"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 d-grid">
                            <button className="btn btn-primary btn-lg" type="button">
                                Search flights
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {/* Toolbar: count + "Sort by" */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                    <span className="badge rounded-pill text-bg-primary">results 5</span>

                    <button className="btn btn-outline-primary btn-sm">
                        Show Best Deals
                    </button>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <label className="form-label m-0 small text-muted">Sort by</label>
                    <select
                        className="form-select form-select-sm"
                        style={{width: 220}}
                        value="price-asc"
                        disabled
                        onChange={() => {
                        }}
                        title="Disabled in this demo"
                    >
                        <option value="price-asc">Price (low → high)</option>
                        <option value="price-desc">Price (high → low)</option>
                        <option value="depart-asc">Departure (earliest)</option>
                        <option value="depart-desc">Departure (latest)</option>
                        <option value="duration-asc">Duration (shortest)</option>
                        <option value="duration-desc">Duration (longest)</option>
                    </select>
                </div>
            </div>

            {/* Results */}
            <div className="row g-3">
                {/* 1 */}
                <div className="col-12">
                    <div className="card shadow-sm border-0">
                        <div
                            className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center"
                                    style={{width: 56, height: 56, fontWeight: 700}}
                                >
                                    SK
                                </div>
                                <div>
                                    <div className="fw-semibold">
                                        SAS <span className="text-muted">• SK101</span>
                                    </div>
                                    <div className="small text-muted">ARN → LHR</div>
                                    <div className="small">2025-08-15 • 08:30 • 2h 20m</div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge text-bg-light border">Economy</span>
                                <span className="badge text-bg-warning">Medium flight</span>
                                <span className="badge text-bg-secondary">Baggage: 1× cabin</span>
                            </div>
                            <div className="text-md-end ms-md-auto" style={{minWidth: 220}}>
                                <div className="fs-4 fw-bold">SEK 1,990</div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-outline-secondary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaInfoCircle className="me-1"/> Details
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaPlaneDeparture className="me-1"/> Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="col-12">
                    <div className="card shadow-sm border-0">
                        <div
                            className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center"
                                    style={{width: 56, height: 56, fontWeight: 700}}
                                >
                                    SK
                                </div>
                                <div>
                                    <div className="fw-semibold">
                                        SAS <span className="text-muted">• SK104</span>
                                    </div>
                                    <div className="small text-muted">ARN → CDG</div>
                                    <div className="small">2025-08-15 • 09:45 • 2h 30m</div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge text-bg-light border">Economy</span>
                                <span className="badge text-bg-warning">Medium flight</span>
                                <span className="badge text-bg-secondary">Baggage: 1× cabin</span>
                            </div>
                            <div className="text-md-end ms-md-auto" style={{minWidth: 220}}>
                                <div className="fs-4 fw-bold">SEK 2,150</div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-outline-secondary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaInfoCircle className="me-1"/> Details
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaPlaneDeparture className="me-1"/> Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="col-12">
                    <div className="card shadow-sm border-0">
                        <div
                            className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center"
                                    style={{width: 56, height: 56, fontWeight: 700}}
                                >
                                    BA
                                </div>
                                <div>
                                    <div className="fw-semibold">
                                        British Airways <span className="text-muted">• BA215</span>
                                    </div>
                                    <div className="small text-muted">LHR → JFK</div>
                                    <div className="small">2025-08-16 • 11:10 • 6h 50m</div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge text-bg-light border">Economy</span>
                                <span className="badge text-bg-danger">Long flight</span>
                                <span className="badge text-bg-secondary">Baggage: 1× cabin</span>
                            </div>
                            <div className="text-md-end ms-md-auto" style={{minWidth: 220}}>
                                <div className="fs-4 fw-bold">SEK 6,490</div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-outline-secondary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaInfoCircle className="me-1"/> Details
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaPlaneDeparture className="me-1"/> Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className="col-12">
                    <div className="card shadow-sm border-0">
                        <div
                            className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center"
                                    style={{width: 56, height: 56, fontWeight: 700}}
                                >
                                    DY
                                </div>
                                <div>
                                    <div className="fw-semibold">
                                        Norwegian <span className="text-muted">• DY330</span>
                                    </div>
                                    <div className="small text-muted">OSL → ARN</div>
                                    <div className="small">2025-08-15 • 13:00 • 1h 00m</div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge text-bg-light border">Economy</span>
                                <span className="badge text-bg-success">Short flight</span>
                                <span className="badge text-bg-secondary">Baggage: 1× cabin</span>
                            </div>
                            <div className="text-md-end ms-md-auto" style={{minWidth: 220}}>
                                <div className="fs-4 fw-bold">SEK 890</div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-outline-secondary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaInfoCircle className="me-1"/> Details
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaPlaneDeparture className="me-1"/> Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className="col-12">
                    <div className="card shadow-sm border-0">
                        <div
                            className="card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center"
                                    style={{width: 56, height: 56, fontWeight: 700}}
                                >
                                    LH
                                </div>
                                <div>
                                    <div className="fw-semibold">
                                        Lufthansa <span className="text-muted">• LH812</span>
                                    </div>
                                    <div className="small text-muted">ARN → FRA</div>
                                    <div className="small">2025-08-17 • 06:15 • 2h 10m</div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge text-bg-light border">Economy</span>
                                <span className="badge text-bg-warning">Medium flight</span>
                                <span className="badge text-bg-secondary">Baggage: 1× cabin</span>
                            </div>
                            <div className="text-md-end ms-md-auto" style={{minWidth: 220}}>
                                <div className="fs-4 fw-bold">SEK 1,790</div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-outline-secondary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaInfoCircle className="me-1"/> Details
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        disabled
                                        title="Disabled in this demo"
                                    >
                                        <FaPlaneDeparture className="me-1"/> Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StaticFlightBooking;
