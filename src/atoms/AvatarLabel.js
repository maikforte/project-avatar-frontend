import React from 'react';
import PropTypes from 'prop-types';

class AvatarLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            size,
            color,
            weight,
            margin,
            children,
        } = this.props;

        const style = {
            color: color || DEFAULTS.COLOR,
            fontSize: size || DEFAULTS.SIZE,
            fontWeight: weight || DEFAULTS.FONT_WEIGHT,
            margin: margin || DEFAULTS.MARGIN,
        };

        return (
            <span style={style}>
                {children}
            </span>
        );
    }
}

AvatarLabel.propTypes = () => ({
    size: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.string,
    children: PropTypes.string,
});

// Default prop style
const DEFAULTS = {
    COLOR: '#000000',
    SIZE: 14,
    FONT_WEIGHT: 'normal',
    MARGIN: 0,
};

export default AvatarLabel;
