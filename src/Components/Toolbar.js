import React from 'react';

// Toolbar for both editor and preview use
const Toolbar = (props) => {
    return (
        <div className='toolbar'>
            <i className='fa fa-free-code-camp' title='no-stack-dub-sack' />
            {props.text}
            <i className={props.icon} onClick={props.onClick} />
        </div>
    );
};

export default Toolbar;