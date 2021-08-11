import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <p>Home</p>
            </div>
        );
    }
}

export default Home;

const styles = {
    container: {},
};
