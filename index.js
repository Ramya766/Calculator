
function safeCalculate(expression) {
    try {
        // Only allow numbers and basic math operators
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            return "Error";
        }
        // Use Function constructor instead of eval (still use with care)
        return new Function('return ' + expression)();
    } catch (e) {
        return "Error";
    }
}
