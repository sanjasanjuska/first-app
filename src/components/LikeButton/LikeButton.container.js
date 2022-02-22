import { useState } from "react";
import LikeButtonComponent from "./LikeButon.component";

export default function LikeButtonContainer() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return <LikeButtonComponent count={count} incrementCount={incrementCount} />;
}