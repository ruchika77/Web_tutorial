function getPrefixedMessanger(text) {
    function innerFunction() {
        const moreText = "moves the web forward!";
        return `${text} ${moreText}`
    }
    return innerFunction;
}