import React from 'react';
import marked from 'marked';

// Allow linebreaks in the marked module
marked.setOptions({
    breaks: true
});

// Create a renderer and make links add a _blank target
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text} </a>`;
};

// Preview Component
const Preview = (props) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: renderer })
            }}
            id='preview'
        />
    );
}

export default Preview;