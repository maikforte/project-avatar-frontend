import React from 'react';
import moment from 'moment';

import { TotalCollection, ScholarCollection } from '../templates/Templates';
import { ScholarService } from '../services/scholar-service/ScholarService';
import { CoinService } from '../services/coin-service.js/CoinService';

class Scholars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fiat: 'php',
            scholars: [],
            inputRonin: '',
            convertedRonin: '',
            slpRate: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.fireGetScholar = this.fireGetScholar.bind(this);
    }

    componentDidMount() {
        this.fireGetScholar(null);
        this.getSlpConversion(this.state.fiat);
    }

    numberWithCommas(value) {
        if (!value) {
            return 0;
        }

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

    getSlpConversion = async (fiat) => {
        const conversion = await CoinService.getSlpConversion(fiat);

        this.setState({
            slpRate: conversion
        });
    }

    render() {
        return (
            <div>
                <label>
                ronin:
                <input type="text" value={this.state.inputRonin} onChange={this.handleChange} />
                </label>
                <button onClick={this.fireGetScholar}>Add Scholar</button>
                <TotalCollection
                    scholars={this.state.scholars}
                    fiat={this.state.fiat}
                    slpRate={this.state.slpRate}
                />
                <ScholarCollection scholars={this.state.scholars}/>
            </div>
        );
    }
}

export default Scholars;

const styles = {};
