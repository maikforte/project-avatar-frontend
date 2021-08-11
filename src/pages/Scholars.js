import React from 'react';

import { ScholarService } from '../services/scholar-service/ScholarService';

class Scholars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.getScholar();
    }

    getScholar = async () => {
        const scholars = await ScholarService.getScholar(process.env.REACT_APP_TEST_RONIN);
        console.log(scholars);
    }

    render() {
        return (
            <div style={styles.container}>
                <p>Scholars</p>
            </div>
        );
    }
}

export default Scholars;

const styles = {
    container: {},
};
