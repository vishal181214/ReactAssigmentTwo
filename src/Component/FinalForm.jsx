import React, {useState} from 'react'

export const FinalForm = () => {
    const[name,setName] = useState('');
    const[depart,setDepart] = useState('');
    const[rate,setRate] = useState('');
    const[list,setList] = useState([]);

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(name,depart,rate);
        const data ={name,depart,rate};
        if(name && depart && rate)
        {
            setList((ls)=>[...ls,data])
            setName('');
            setDepart('');
            setRate('');
        }
    }

    return(
        <div style={{marginTop:"50px"}}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input name="name" value={name} onChange={(e)=>setName(e.target.value)} className="inpField" /><br/><br/>
                <label htmlFor="depart" className='deptLabel'>Department :</label>
                <input name="depart" value={depart} onChange={(e)=>setDepart(e.target.value)} className="inpField"/><br/><br/>
                <label htmlFor="rate">Rate :</label>
                <input name="rate" value={rate} onChange={(e)=>setRate(e.target.value)} className="inpField"/><br/><br/>
                <button>Submit</button>
            </form>
            {
                <div className='showData'>
                   { list.map((a) =>
                    <div className='itemDiv'>
                        <span>Name : {a.name} | </span>
                        <span>Department : {a.depart} | </span>
                        <span>Rateing : {a.rate}</span>
                    </div>
                   )}
                </div>
            }
        </div>
    )
}