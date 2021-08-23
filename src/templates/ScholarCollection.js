import React from 'react';

import { ScholarCard } from '../organisms/Organisms';

class ScholarCollection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.scholarsContainer}>
                {
                    this.props.scholars.map((scholar, index) => {
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

export default ScholarCollection;

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
