import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word"

export default function Day() {

    const { day } = useParams();
    //const day = useParams().day;

    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setWords(data);
            })
    }, [day]);

    const wordList = dummy.words.filter(word => (
        word.day == day
    ));

    return (
        <>
            <table>
                <h2>Day {day}</h2>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}