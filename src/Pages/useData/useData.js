import { useState, useEffect } from "react";

const Usedata = () => {
    //State Declare
    const [course, setCourse] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('http://localhost:7000/players')
            .then(res => res.json())
            .then(data => this.course(data))
    },
        []);

    return [course, setCourse]
}

export default Usedata;