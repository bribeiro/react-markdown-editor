var React = require('react');
var MarkdownEditor = require('react-markdown-light').MarkdownEditor;

var ExampleWithOnChangeContent = React.createClass({
  getInitialState: function() {
    return {
      content: null
    };
  },

  render: function() {
    return (
      <div>
        <div style={{'border': '1px solid #ddd', 'padding': '10px', 'marginBottom': '30px'}}>{this.state.content}</div>
        <MarkdownEditor
          initialContent='My initial content'
          iconsSet='materialize-ui'
          onContentChange={this._onContentChange} />
      </div>
    );
  },

  _onContentChange: function(_content) {
    this.setState({content: _content});
  }
});

module.exports = ExampleWithOnChangeContent;
