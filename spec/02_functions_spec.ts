import * as formatters from "../src/formatters";
describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {
            // Named Function

            expect(add(2, 2)).toBe(4);
            function add(a: number, b: number): number {
                return a + b;
            }
            // Anonymous Functions

            const subtract = function (a: number, b: number) {
                return a - b;
            }
            expect(subtract(10, 2)).toBe(8);

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('You almost destroyed the universe!');
                } else {
                    return a / b;
                }
            }

            const age = 21;
            const message = age >= 21 ? "Old Enough" : "Too Young";

            function makeMeASalad(lettuce: string, dressing: string) {
                return {
                    lettuce: 'Using ' + lettuce,
                    with: dressing
                }
            }

            const salad = makeMeASalad('Romain', 'Russian');

            expect(salad.with).toBe('Russian');


        });
        it('passing arguments to functions', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
        it('passing arguments to functions', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
    });
    describe('higher order functions', () => {
        /*
        takes one or more functions as arguments (i.e. procedural parameters),
        returns a function as its result.
        */
        it('takes a function as an argument', () => {
            const answer = formatters.formatName('Han', 'Solo');
            expect(answer).toBe('Solo, Han');
            expect(formatters.PI).toBe(3.1415);


        });

    });
});