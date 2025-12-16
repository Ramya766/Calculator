function safeCalculate(expression) {
    try {
        // Only allow numbers and operators
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            return "Error";
        }

        // Use Function BUT freeze it to avoid injection
        const result = Function(`"use strict"; return (${expression})`)();
        return result;
    } catch {
        return "Error";
    }
}

