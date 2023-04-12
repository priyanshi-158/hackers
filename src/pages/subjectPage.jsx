import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { subjectsContext } from '../context/ContextApi';
// import { subjectsContext } from '../context/ContextApi'

const SubjectPage = () => {
    const { subjects, setSubjects } = useContext(subjectsContext);
    const { subjectName } = useParams();
    console.log(subjects.subjectName)
    // subjects.subjectName.append({ [topic]: "topic", [text]: "text", [link]: "link" });
    // setSubjects(subjects)
    // console.log(subjects.subjectName)
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // subjects.subjectName.append({ [topic]: e.target.topic, [text]: e.target.text, [link]: e.target.link });
    //     // setSubjects(subjects)
    // }
    return (
        <div >
            HELLO
        </div>
    )
}

export default SubjectPage;