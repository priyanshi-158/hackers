import React from 'react'

const Form = () => {
      //const [subject, setSubjects] = useState();
 //const { subjects, setSubjects } = useContext(subjectsContext);
     //const { subjectName } = useParams();
    // // const notes = subject.subjectName;
    // // console.log(notes)
    const handleSubmit = (e) => {
        e.preventDefault();
      //     // setSubjects({...subjects,})
       e.target.topic
       e.target.text
        e.target.link
      }
    return (
        <div className='bg-slate-100 text-black min-h-screen p-5 flex flex-col items-center min-w-full'>
            <div className='flex flex-col lg:flex-row'><h2 className="text-3xl  font-semibold font-Poppins my-2">Post New Topic</h2>
                </div>
            <form id='form' className="flex flex-col w-[90%] px-12" >
                <label htmlFor="title" className='text-lg'>Name of Topic</label>
                <input className="inp" type="text" placeholder="Enter Name of topic" id="title" name="title"  />
                <label htmlFor="notes" className='text-lg'>Add your notes</label>
                <textarea className="inp" rows='10' cols='30' placeholder="Add Your Notes here " id="notes" name="requirements" />
                <label htmlFor="url" className='text-lg'>Lecture Video Links</label>
                <input className="inp" type="url" placeholder="Enter URL" id="url" name="url" />
                <button className="bg-[#2FCDFF] disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#107999] disabled:hover:bg-[#2FCDFF] border-[#107999] border border-solid rounded-xl px-4 py-1 font-Poppins mx-[30%]  active:scale-105">Submit</button>
            </form>

        </div>
    )
}

export default Form