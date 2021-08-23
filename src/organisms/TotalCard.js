import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Label } from '../atoms/Atoms';
import { SlpDisplay, FiatDisplay } from '../molecules/Molecules';

class TotalCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            slpCount,
            fiatConversion,
        } = this.props;

        const style = {
            container: {
                backgroundColor: '#A8D0E6',
                opacity: 1,
                width: 300,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            innerContainer: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                flex: 1,
            },
            label: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            value: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            spacer: {
                height: 20,
            },
            contentContainer: {
                display: 'flex',
                flexDirection: 'column',
            },
        };

        return (
            <div style={style.container}>
                <div>
                    <Heading>{ this.props.heading }</Heading>
                </div>
                <div style={style.spacer}/>
                <div style={style.innerContainer}>
                    <div style={style.contentContainer}>
                        <SlpDisplay slpCount={this.props.slpCount} />
                        <div style={style.spacer} />
                        <FiatDisplay fiat="PHP" value={this.props.fiatConversion} />
                    </div>
                </div>
            </div>
        );
    }
}

TotalCard.propTypes = () => ({
    scholar: PropTypes.object,
});

// Default prop style
const DEFAULTS = {};

export default TotalCard;
