import FormatElapsedTime from "../utils/FormatElapsedTime";

type text = {
    text: string;
    type?: "success" | "command" | "info" | "error";
    elapsed: number;
}

export default function LogText ({ text, type, elapsed } : text) {
    let prefix = "";
    let color = "normal-text";
    switch (type) {
        case "success":
            prefix = "✓";
            color = "check-text";
            break;
        case "command":
            prefix = ">";
            break;
        case "info":
            prefix = "*";
            color = "info-text"
            break
        case "error":
            prefix = "✗";
            color = "error-text"
            break
        default:
            prefix = "";
    }
    return (
        <p className={`log-text ${color}`}>
            {FormatElapsedTime(elapsed)}
            {prefix && <span>{prefix}</span>}
            {text}
        </p>
    )
}