import { useState, useEffect } from "react";
import './style.scss'

function Headline(props) {
    const initialHeadline = props.title ?? "Headline";
    const headingType = props.type ?? "h1";

    const [intervalId, setIntervalId] = useState(null);
    useEffect(_ => _ => intervalId && clearInterval(intervalId), [intervalId])


    const hackerEffect = (e) => {
        let iteration = 0;

        if (intervalId) {
            clearInterval(intervalId);
        }

        const newIntervalId = setInterval(() => {
            const updatedText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) return e.target.dataset.value[index];
                    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                })
                .join("");

            e.target.innerText = updatedText;

            if (iteration >= e.target.dataset.value.length) {
                clearInterval(newIntervalId);
            }

            iteration += 1 / 3;
        }, 30);

        setIntervalId(newIntervalId);
    };


    const Heading = headingType;

    return (
        <Heading className={'hacker-effect'} data-value={initialHeadline} onMouseEnter={hackerEffect}>
            {initialHeadline}
        </Heading>
    );
}

export { Headline };
