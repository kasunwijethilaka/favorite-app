import React, { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { log } from 'console';

const admin = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    //const [formValues, setformValues] = useState({name:'', status: false});
    const [name, setname] = useState('');
    const [itemData, setitemData] = useState<any[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
        const response = await fetch("/api/favorites");
        const data = await response.json();
        setitemData(data);
        };
        fetchItems();
    }, []);
    const addItem = async() => {
        const status = false;
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        
        const response = await fetch(`/api/favorites/`, {
            method: "post",
            body: JSON.stringify({ name, status, currentDate }),
            headers: {
              "Content-Type": "application/json",
            },
        });
    }
    console.log(itemData);
    
  return (
    <>
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1>Add Items</h1>
                        <FormControl>
                            <TextField onChange={(e) => {setname(e.target.value)}} value={name} id="outlined-basic" label="Item Name" variant="outlined" />
                            <Button onClick={addItem} variant="contained">Submit</Button>
                        </FormControl>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default admin