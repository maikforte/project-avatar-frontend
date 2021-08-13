import React from 'react';
import moment from 'moment';

import { Label, Heading } from '../atoms/Atoms';
import { ScholarCard } from '../organisms/Organisms';
import { ScholarService } from '../services/scholar-service/ScholarService';

class Scholars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scholars: [],
            inputRonin: '',
            convertedRonin: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.fireGetScholar = this.fireGetScholar.bind(this);
    }

    convertAddress(rawRoninAddress) {
        return `0x${rawRoninAddress.split(':')[1]}`;
    }

    handleChange(event) {
        this.setState({
            inputRonin: event.target.value,
        });
    }

    fireGetScholar(event) {
        this.getScholar(this.state.inputRonin);
    }

    getScholar = async (roninAddress) => {
        const scholar = await ScholarService.getScholar(this.convertAddress(roninAddress));

        const lastClaim = moment.unix(scholar.last_claimed).format('LLL')
        const daySinceLastClaim = moment(Date()).diff(moment(lastClaim), 'days');

        scholar.averageSinceLastClaim = scholar.slp_inventory / daySinceLastClaim;

        const scholars = this.state.scholars;

        scholars.push(scholar);

        this.setState({
            scholars: scholars,
            inputRonin: '',
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <label>
                ronin:
                <input type="text" value={this.state.inputRonin} onChange={this.handleChange} />
                </label>
                <button onClick={this.fireGetScholar}>Add Scholar</button>
                <div style={styles.scholarsContainer}>
                {
                    this.state.scholars.map((scholar, index) => {
                        scholar.name = `Scholar #${index + 1}`;
                        return (
                            <div style={styles.scholarCard} key={index} >
                                <ScholarCard scholar={scholar}></ScholarCard>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default Scholars;

const styles = {
    scholarsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    scholarCard: {
        margin: 15,
    },
};
