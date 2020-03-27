export function cleanVerboseText(text, verboseArray) {
    if (text) {
        var newText = text.replace(verboseArray, "")
        return newText;
    } else {
        return text;
    }
}