import React from "react";

class summonerStats extends React.Component {
    navigateToFeature() {
        const { history } = this.props;
        history.push("/freeChampions");
    }
    render() {
        return (
            <div className="Home-card">
                <h1>Home Page</h1>
                <button
                    onClick={() => {
                        this.navigateToFeature();
                    }}
                >
                    Go
                </button>
            </div>
        );
    }
}

export default summonerStats;