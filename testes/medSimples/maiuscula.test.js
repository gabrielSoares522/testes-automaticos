function formatarNome(nome){
    nome = nome.trim()
    nome = nome.toLowerCase()

    if(nome == ''){
        return ''
    }
    const words = nome.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
return words.join(" ")
}
describe('formatarNome', () => {
    test('should capitalize the first letter of each word', () => {
        const input = 'john doe';
        const expectedOutput = 'John Doe';
        const result = formatarNome(input);
        expect(result).toEqual(expectedOutput);
    });

    test('should handle leading and trailing spaces', () => {
        const input = '  jane smith  ';
        const expectedOutput = 'Jane Smith';
        const result = formatarNome(input);
        expect(result).toEqual(expectedOutput);
    });

    test('should handle uppercase letters', () => {
        const input = 'MARY ANN';
        const expectedOutput = 'Mary Ann';
        const result = formatarNome(input);
        expect(result).toEqual(expectedOutput);
    });

    test('should handle empty input', () => {
        const input = '';
        const expectedOutput = '';
        const result = formatarNome(input);
        expect(result).toEqual(expectedOutput);
    });

    test('should handle single-word input', () => {
        const input = 'test';
        const expectedOutput = 'Test';
        const result = formatarNome(input);
        expect(result).toEqual(expectedOutput);
    });
});