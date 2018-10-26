import React from "react";

class serverStatus extends React.Component {

    render() {
        return (
            <div className="Home-card">
                <h1>Home Page</h1>
                <button
                    onClick={() => {
                        this.navigateToFeature();
                    }}
                >
                   Server status is offline
                </button>
            </div>
        );
    }
}

export default serverStatus;