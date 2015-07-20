module.exports.assert = function(predicate, errorText) {
	if(!predicate) {
		console.error("Assertion failed: " + errorText)
	}
}