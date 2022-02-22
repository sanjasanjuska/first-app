import { getRandomColor, getRandomName } from "../helpers/random";
import Greet from "./Greet";

export default function UserInfo() {
    const color = getRandomColor();

    return (
        <Greet greeting="Hello" name={getRandomName()}>
            Your color is <span style={{ color: color }}>{color}</span>
        </Greet>
    );
}