import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // สร้าง state สำหรับเก็บค่าจากฟอร์ม
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // ฟังก์ชันที่ใช้ตรวจสอบข้อมูล
  const handleSubmit = (e) => {
    e.preventDefault();  // ป้องกันการรีเฟรชหน้าเว็บ

    // ตรวจสอบว่ามีข้อมูลครบทุกฟิลด์หรือไม่
    if (!name || !email || !message) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
    } else {
      alert('ข้อมูลถูกส่งเรียบร้อยแล้ว!');
      // สามารถใส่การส่งข้อมูลไปยังเซิร์ฟเวอร์ที่นี่
    }
  };

  return (
    <div>
      <h2>ติดต่อเรา</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        <label>อีเมล:</label>
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <label>ข้อความ:</label>
        <textarea 
          name="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        
        <button type="submit">ส่ง</button>
      </form>

      <p>เบอร์โทร: 053 213 061</p>
      <p>อีเมล: lannapoly@lannapoly.ac.th</p>
      
      {/* Google Maps Embed */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7553.312888284188!2d98.99216!3d18.813458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LmC4Lib4Lil4Li04LmA4LiX4LiE4LiZ4Li04LiE4Lil4Liy4LiZ4LiZ4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1735877574504!5m2!1sth!2sth" width="400" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default Contact;
