import React, { Component } from 'react';
import './App.css';

// Import components
import { Toolbar, Editor, Preview } from './Components';

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    }

    // no binding needed since arrow functions are used
    // this.handleChange = this.handleChange.bind(this);
    // this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    // this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  // Update the input that should be formated
  handleChange = (event) => {
    this.setState({
      markdown: event.target.value
    });
  }

  handleEditorMaximize = () => {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }

  handlePreviewMaximize = () => {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  }

  render() {
    // classes being filled with tertiary operator, to apply the correct styles for maximized editor/preview
    const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']    // editor maximized
      : this.state.previewMaximized
        ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']  // preview maximized
        : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];              // nothing maximized

    return (
      <div>
        <div className={classes[0]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text='Editor'
          />
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange}
          />
        </div>
        <div className='converter'>vvv</div>
        <div className={classes[1]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text='Previewer' />
          <Preview
            markdown={this.state.markdown}
          />
        </div>
      </div>
    )
  }
}

// Placeholder for instant preview when opening the site
// Taken from the example at FreeCodeCamp
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;