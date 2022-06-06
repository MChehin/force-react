import React, { useState } from 'react';
import "./form.css";


export default function Form () {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function handleChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }

  function onSubmit() {
    const { name, email, phone } = data;
    console.log(`Tu nombre completo es ${name}, tu correo electrónico es ${email} y tu teléfono es ${phone} `);
  }

  return (
    <>
      <div className='form-style'>
        <>
          <div className="contact-form" >
            <label style={{ marginRight: 4 }}>Nombre completo</label>
            <input
              type="text"
              name="name"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>
        <>
          <div className="contact-form" >
            <label style={{ marginRight: 4 }}>Correo electrónico</label>
            <input
              type="text"
              name="email"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>
        <>
          <div className="contact-form" >
            <label style={{ marginRight: 4 }}>Teléfono</label>
            <input
              type="text"
              name="phone"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>

        {
          <button className='btn btn-form'
            disabled={
              !(data.name !== '' && data.surname !== '' && data.age !== '' && data.email !== '' && data.phone !== '')
            }
            onClick={(evt) => onSubmit(evt)}
            style={{}}
          >
            Crear orden
          </button>
        }
      </div>
    </>
  );
}