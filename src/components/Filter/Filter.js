import React, { Component } from 'react';
import './Filter.css';

const Filter = (props) => {
    const handleFilter = props.handleFilter;
    return (
        <section className="Filter">
            <input onInput={handleFilter} type="search" placeholder="Filter..." />
        </section>
    );
}

export default Filter;
