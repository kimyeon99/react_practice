import { useState } from "react";

export default function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" check={isDone} onChange={() => { setIsDone(!isDone) }} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '안보기' : '보기'}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}