import React from "react";

class challengerList extends React.Component {

    render() {
        return (
            <div className="Home-card">
                <h1>Home Page</h1>
                <button
                    onClick={() => {
                        this.navigateToFeature();
                    }}
                >
                    ChallengerList
                </button>
            </div>
        );
    }
}

export default challengerList;