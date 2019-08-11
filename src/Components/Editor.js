import React from 'react';

// Editor Component
const Editor = (props) => {
    return (
        <textarea
            id='editor'
            onChange={props.onChange}
            type='text'
            value={props.markdown}
        />
    );
}

export default Editor;
