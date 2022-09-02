import { React, useState } from "react";
import './styles/MainBody.css'

function Articles() {
  const [form, setForm] = useState({
    Title: '',
    Abstract: '',
    Article: '',
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
    <div className="postMainBody">
      <div className='titleInput'>
        Title :
        <input
          type='text'
          onChange={handleChange}
          name='Title'
          value={form.Title}
          placeholder='Enter a descriptive title'
        />
      </div>

      <div className='abstractTextDiv'>Abstract :</div>
      <textarea
        onChange={handleChange}
        className='abstractText'
        name='Abstract'
        value={form.Abstract}
        placeholder='Enter a 1-paragraph abstract'
        type='text'
      />

      <div className='articleTextDiv'>Article Text :</div>
      <textarea
        onChange={handleChange}
        className='articleText'
        name='Article'
        value={form.Article}
        placeholder='Enter a 1-paragraph article text'
        type='text'
      />

      <div className='tagsInput'>
        Tags :
        <input
          onChange={handleChange}
          name='Tags'
          value={form.Tags}
          type='text'
          placeholder='Add up to 3 tags to describe what your question is about e.g., Java'
        />
      </div>

      <button>POST</button>
    </div>
  );
}

export default Articles;