describe('writing basic specs', () => {
    it('we can add two numbers together', () => {
        // Given (Arrange)
        const a = 10, b = 20;

        // When (Act)
        const answer = a + b;

        // Then (Assert)
        expect(answer).toBe(30);

    });
});