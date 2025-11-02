
import React, { useState } from 'react';
import axios from 'axios';

export default function AddFood(){
  const [name,setName]=useState('');
  const [desc,setDesc]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('');
  const [files,setFiles]=useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const uploadImages = async () => {
    const form = new FormData();
    for (let i=0;i<files.length;i++){
      form.append('images', files[i]);
    }
    const res = await axios.post('http://localhost:5000/api/foods/upload', form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data.imageUrls;
  };

  const submit = async (e) => {
    e.preventDefault();
    try{
      const imageUrls = await uploadImages();
      const payload = { name, description: desc, price: Number(price), category, images: imageUrls };
      await axios.post('http://localhost:5000/api/foods', payload);
      alert('Food created');
    }catch(err){
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Add Food (multiple images)</h3>
      <form onSubmit={submit} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full p-2 border rounded" />
        <input value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="w-full p-2 border rounded" />
        <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" className="w-full p-2 border rounded" />
        <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category" className="w-full p-2 border rounded" />
        <input type="file" multiple onChange={handleFileChange} className="w-full" />
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Create</button>
        </div>
      </form>
    </div>
  );
}
