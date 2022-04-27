import { useState } from "react";
import "./quiz.css"

const conCategories = ["Football","Cricket","Base-Ball","Basket-Ball","Table Tennis","Hockey Puck","Volley Ball"]
const conLavels = ["Easy","Normal","Hard"]

const AddQuizQuestion = ({setAddQuizeModalOpen}) => {
    const [newQuizInfo,setNewQuizInfo] = useState({});
    const [newQuizOptions,setNewQuizOptions] = useState({});

    const handleNewQuizChange = (e) =>{
        const _newQuizInfo = {...newQuizInfo}
        _newQuizInfo[e.target.name] = e.target.value;
        setNewQuizInfo(_newQuizInfo)
    }
    const handleNewQuizAnswerBlur = (e) =>{
        const _newQuizOptions = {...newQuizOptions}
        _newQuizOptions[e.target.name] = e.target.value;
        setNewQuizOptions(_newQuizOptions)
    }
    const handleQuizeAdd = (e) =>{
        console.log(newQuizOptions.length);
        e.preventDefault();
        console.log("click");
        const quizOptions = []
        Object.keys(newQuizOptions).map(property=>{
            quizOptions.push(newQuizOptions[property])
            return null
        })
        if ((quizOptions.length === 4) && (newQuizInfo.lavel) && (newQuizInfo.ans) && (newQuizInfo.question) && (newQuizInfo.playing_ctg)) {
            newQuizInfo.options = quizOptions
            fetch("http://localhost:7000/contest/quizes",{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(newQuizInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    setNewQuizInfo({})
                    setNewQuizOptions({})
                    alert("Quiz Added successfully")
                    setAddQuizeModalOpen(false);
                }else{
                    alert("Something went wrong")
                }
            })
            
        }else{

            alert("All fields are required")
        }
        console.log(quizOptions);
    }
    return (
        <div className="add-quiz" style={{marginBottom:"15px"}}>
            <button onClick={e=>setAddQuizeModalOpen(false)} style={{display:"block",marginLeft:"auto",border:"none",backgroundColor:"red", borderRadius:"8px", padding:"3px 25px", fontWeight:"bold"}}>X</button>
            <form className='px-3 mt-4' onSubmit={e=>handleQuizeAdd(e)}>
                <div class="mb-3 row">
                    <label for="question" class="col-sm-2 col-form-label">Question</label>
                    <div class="col-sm-10">
                        <input onChange={e=>handleNewQuizChange(e)} type="text" name="question" class="form-control" id='question' placeholder='Add a question' required/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="question" class="col-sm-2 col-form-label">Options</label>
                    <div class="col-sm-10">
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question1' class="form-control" id='question1' placeholder='Option 1' required/>
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question2' class="form-control" id='question2' placeholder='Option 2'required />
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question3' class="form-control" id='question3' placeholder='Option 3' required/>
                        <input onBlur={e=>handleNewQuizAnswerBlur(e)} type="text" name='question4' class="form-control" id='question4' placeholder='Option 4' required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="question" class="col-sm-2 col-form-label">Answer</label>
                    <div class="col-sm-10">
                        <input  onChange={e=>handleNewQuizChange(e)} type="text" name="ans" class="form-control" id='question' placeholder='correct answer' required />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="playing_ctg" class="col-sm-2 col-form-label"> Category</label>
                    <div class="col-sm-10">
                        <select class="form-select" name="playing_ctg" aria-label="Default select example"  onChange={e=>handleNewQuizChange(e)} id='playing_ctg' defaultValue={"Choose a category"} required>
                            <option value={"Choose a category"} disabled>Choose a category</option>
                            {
                                conCategories.map(ctg=><option value={ctg}>{ctg}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="level" class="col-sm-2 col-form-label">Level</label>
                    <div class="col-sm-10">
                        <select class="form-select"  onChange={e=>handleNewQuizChange(e)} name="lavel" aria-label="Default select example" id='level' defaultValue={"Choose a level"} required>
                            <option value={"Choose a level"} disabled>Choose a level</option>
                            {
                                conLavels.map(lavel=><option value={lavel}>{lavel}</option>)
                            }
                        </select>
                    </div>
                </div>
                <button style={{display:"block",margin:"auto",border:"none",backgroundColor:"skyblue", borderRadius:"8px", padding:"3px 25px", fontWeight:"bold"}} type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddQuizQuestion;