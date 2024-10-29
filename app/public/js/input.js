const validateRegex = () => {
    const [regexInput, textInput, result] = ['regex', 'text', 'result'].map(id => document.getElementById(id));

    try {
        const isValid = new RegExp(regexInput.value).test(textInput.value);
        result.textContent = isValid
            ? "El texto coincide con la expresión."
            : "El texto NO coincide con la expresión.";
        result.style.color = isValid ? "green" : "red";
    } catch {
        result.textContent = "Expresión regular inválida.";
        result.style.color = "red";
    }
};
