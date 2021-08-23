import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Avatar } from '../atoms/Atoms';
import { LabelValue, SlpDisplay } from '../molecules/Molecules';

class ScholarCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    numberWithCommas(value) {
        if (!value) {
            return 0;
        }

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    removeDecimal(value) {
        if (!value || value < 1) {
            return 0;
        }

        return (Math.round(value * 100) / 100).toFixed(0);
    }

    render() {
        const {
            scholar,
        } = this.props;

        const style = {
            container: {
                backgroundColor: '#A8D0E6',
                opacity: 1,
                width: 250,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            item: {
                marginBottom: 20,
            },
            nextClaim: {
                position: 'relative',
                innerDiv: {
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                },
            }
        };

        return (
            <div style={style.container}>
                <div style={style.item}>
                    <Avatar src="images/avatar.png" size="120"/>
                </div>
                <div style={style.item}>
                    <Heading weight="900" style={style.item}>{ scholar.name }</Heading>
                </div>
                <div style={style.item}>
                    <SlpDisplay style={style.item} slpCount={ scholar.slp_inventory } />
                </div>
                <div style={style.item}>
                    <LabelValue style={style.item} label="ALL TIME">
                        {
                            this.numberWithCommas(scholar.overall_farmed_slp)
                        }
                    </LabelValue>
                </div>
                <div style={style.item}>
                    <LabelValue style={style.item} label="Ave since last claim">
                        {
                            this.numberWithCommas(this.removeDecimal(scholar.averageSinceLastClaim))
                        }
                    </LabelValue>
                </div>
            </div>
        );
    }
}

ScholarCard.propTypes = () => ({
    scholar: PropTypes.object,
});

// Default prop style
const DEFAULTS = {};

export default ScholarCard;
