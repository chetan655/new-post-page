import { React, useState } from 'react';
import './styles/MainBody.css'

function Questions() {
    
  const [form, setForm] = useState({
    Title: '',
    Description: '',
    Tags: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setForm((state) => ({
    state,
    [name]: value
    }));
  };

  return (
    <div className='postMainBody'>
      <div className='titleInput'>
        Title :
        <input
          type='text'
          name='Title'
          value={form.Title}
          onChange={handleChange}
          placeholder='Start your question with how, what, why, etc. '
        />
      </div>

      <div className='abstractTextDiv'>Describe your problem :</div>
      <textarea
        type='text'
        className='abstractText'
        name='Description'
        value={form.Description}
        onChange={handleChange}
        placeholder="Type Here :)"
      />

      <div className='tagsInput'>
        Tags :
        <input
          type='text'
          name='Tags'
          value={form.Tags}
          onChange={handleChange}
          placeholder='Add up to 3 tags to describe what your question is about e.g., Java'
        />
      </div>

      <button>POST</button>

    </div>
  );
}

export default Questions;