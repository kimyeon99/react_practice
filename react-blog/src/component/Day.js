import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word"

export default function Day() {
    const { day } = useParams();
    //const day = useParams().day;

    const wordList = dummy.words.filter(word => (
        word.day == day
    ));

    return (
        <>
            <table>
                <h2>Day {day}</h2>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}