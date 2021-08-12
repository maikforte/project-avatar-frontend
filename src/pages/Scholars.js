import React from 'react';

import { Label } from '../atoms/Atoms';
import { ScholarService } from '../services/scholar-service/ScholarService';

class Scholars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getScholar();
    }

    getScholar = async () => {
        const scholars = await ScholarService.getScholar(process.env.REACT_APP_TEST_RONIN);
        console.log(scholars);
    }

    render() {
        return (
            <div style={styles.container}>
                <Label size={16}>Scholars</Label>
            </div>
        );
    }
}

export default Scholars;

const styles = {
    container: {},
};
