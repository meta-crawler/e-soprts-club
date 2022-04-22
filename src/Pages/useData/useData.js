import { useState, useEffect } from "react";

const Usedata = () => {
    //State Declare
    const [course, setCourse] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://enigmatic-garden-34025.herokuapp.com/players')
            .then(res => res.json())
            .then(data => this.course(data))
    },
        []);

    return [course, setCourse]
}

export default Usedata;