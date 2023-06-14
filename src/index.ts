import readline from 'readline';
import { Rover } from '../src/marsRoverMove/marsRover';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const stratRover = (): void =>  {
    rl.question('Enter the initial position and direction of the rover (e.g., 0 0 N): ', (initialPosition) => {
        const [x, y, direction] = initialPosition.split(' ');
        const rover = new Rover(parseInt(x), parseInt(y), direction);

        rl.question('Enter the sequence of commands for the rover: ', (commands) => {
            const finalPosition = rover.move(commands);
            console.log('Final position: ${finalPosition}');

            rl.question('Do you want to run another rover? (y/n: ', (answer) => {
                if (answer.toLowerCase() === 'y') {
                    stratRover();
                } else {
                    rl.close();
                }
            });
        });
    });
}

console.log('=== Welcome to the Mars Rover ===');
stratRover();