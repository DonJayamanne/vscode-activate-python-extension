const vscode = require('vscode');
function activate() {
	vscode.extensions.getExtension('ms-python.python').activate();
}
exports.activate = activate;
function deactivate() {}
module.exports = {
	activate,
	deactivate
}
