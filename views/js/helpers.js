let helpers =  {
	setHTMLAttributes: function(element, attributesObj) {
		for (let atrribute in attributesObj) {
			element.setAttribute(atrribute, attributesObj[atrribute]);
		}
	}
}

export { helpers };