import React from 'react';
import _ from 'lodash';

import { TotalCard } from '../organisms/Organisms';

class TotalCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    roundOff(value) {
        if (!value || value < 1) {
            return 0;
        }

        return (Math.round(value)).toFixed(2);
    }

    numberWithCommas(value) {
        if (!value) {
            return 0;
        }

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    getTotalUnclaimedSLP(scholars) {
        let totalUnclaimed = 0;

        _.forEach(scholars, (scholar) => {
            totalUnclaimed += scholar.slp_inventory;
        });

        return totalUnclaimed;
    }

    getTotalClaimedSLP(scholars) {
        let totalClaimed = 0;

        _.forEach(scholars, (scholar) => {
            totalClaimed += scholar.slp_holdings;
        });

        return totalClaimed;
    }

    getTotalUnclaimedFiat(scholars) {
        if (this.props.slpRate == 0) {
            return 0;
        }

        let totalUnclaimedSLP = this.getTotalUnclaimedSLP(scholars);

        const convertedValue = totalUnclaimedSLP * this.props.slpRate;

        const roundedOff = convertedValue;

        return this.numberWithCommas(roundedOff);
    }

    getTotalClaimedFiat(scholars) {
        if (this.props.slpRate == 0) {
            return 0;
        }

        let totalClaimedSLP = this.getTotalClaimedSLP(scholars);

        const convertedValue = totalClaimedSLP * this.props.slpRate;

        const roundedOff = convertedValue;

        return this.numberWithCommas(roundedOff);
    }

    render() {
        return (
            <div>
                TotalCollection
                <div style={styles.totalContainer}>
                    <div style={styles.totalCard}>
                        <TotalCard
                            slpCount={
                                this.numberWithCommas(
                                    this.getTotalUnclaimedSLP(this.props.scholars)
                            )}
                            fiatConversion={
                                this.getTotalUnclaimedFiat(this.props.scholars)
                            }
                            heading="Total Unclaimed" />
                    </div>

                    <div style={styles.totalCard}>
                        <TotalCard
                            slpCount={
                                this.numberWithCommas(
                                    this.getTotalClaimedSLP(this.props.scholars)
                            )}
                            fiatConversion={
                                this.getTotalClaimedFiat(this.props.scholars)
                            }
                            heading="Total Claimed" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TotalCollection;

const styles = {
    totalContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    totalCard: {
        margin: 15
    }
};
