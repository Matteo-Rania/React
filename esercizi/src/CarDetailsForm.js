import React, { useRef, useEffect, useState } from "react";

 export function CarDetailsForm({
   initialData = { model: "Skoda", year: 2014, color: "white" },
 }) {
   const inputRef = useRef();
   const [carForm, setCarForm] = useState(false);

   useEffect(() => {
     inputRef.current.elements.model.value = initialData.model;
     inputRef.current.elements.year.value = initialData.year;
     inputRef.current.elements.color.value = initialData.color;
   }, [initialData]);

   useEffect(() => {
     if (carForm) {
       inputRef.current.elements.model.value = "";
       inputRef.current.elements.year.value = "";
       inputRef.current.elements.color.value = "";
     }
   }, [carForm]);

   function carFormSet() {
     setCarForm(true);
   }
   function handleForm(event) {
    event.preventDefault();
    const carData = {
        model: inputRef.current.elements.model.value,
        year : inputRef.current.elements.year.value,
        color : inputRef.current.elements.color.value,
    }
    console.log(carData)
    console.log(carForm)
   }

   return (
     <form ref={inputRef} onChange={carFormSet} onSubmit={handleForm}>
       <h2 className="text-center ">Search Car</h2>
       <input className="border-2 border-black m-2 " name="model" placeholder="Insert car model"/>
       <input className="border-2 border-black m-2 " type='number' name="year" placeholder="Insert year"/>
       <input className="border-2 border-black m-2 " name="color" placeholder="Insert color"/>
       <button className="border-2 border-black m-2 " type="submit" >Submit</button>
     </form>
   );
 }