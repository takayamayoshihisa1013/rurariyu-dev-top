export default function FormatElapsedTime(delay_time : number) {
    const total_seconds = Math.floor(delay_time / 1000);

    const minutes = Math.floor(total_seconds / 60);
    const seconds = total_seconds % 60;

    return `[00:${
        minutes.toString().padStart(2, "0")
    }:${
        seconds.toString().padStart(2, "0")
    }]`;
}