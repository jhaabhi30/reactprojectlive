import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props){
        return(
                
                <div className="col span-1-of-4 box">
                        <FontAwesomeIcon className="icon-big" icon={props.icons} />

                        <h3 >{props.h3}</h3>
                    <p>
                       {props.p}
                    </p>
                </div>
        );
}
export default Card;