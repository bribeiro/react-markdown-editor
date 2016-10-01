var Reflux = require('reflux');

var MarkdownEditorActions = Reflux.createActions([
	'clearSelection',
	'clickEditorTab',
	'clickPreviewTab',
	'makeBold',
	'makeImage',
	'makeItalic',
	'makeLink',
	'makeStrikethrough',
	'makeList',
	'makeHeader',
	'makeSubHeader',
	'makeUnderline',
	'setSelection'
]);

module.exports = MarkdownEditorActions;
