const root = document.getElementById('root')
function makeCall (parent, tagName, callback) {
	const element = document.createElement(tagName);
	parent.appendChild(element)
	if(callback) {
		callback(element)
	}
 return element
}
const rootDiv = makeCall(root, 'div', function(element) {
	element.setAttribute('id', 'root-tagDiv');
});
makeCall(rootDiv, 'form');