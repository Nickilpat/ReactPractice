import React from 'react';
import PropTypes from 'prop-types';
import './Cake.scss';

const Cake = () => (
  <div class="cake">
    <div class="plate"></div>
    <div class="layer layer-bottom"></div>
    <div class="layer layer-middle"></div>
    <div class="layer layer-top"></div>
    <div class="icing"></div>
    <div class="drip drip1"></div>
    <div class="drip drip2"></div>
    <div class="drip drip3"></div>
    <div class="candle">
        <div class="flame"></div>
    </div>
</div>
);

Cake.propTypes = {};

Cake.defaultProps = {};

export default Cake;
