import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <div className="courses-container">
      {/* Section: Vocational Certificate (ปวช.) */}
      <div className="course-section">
        <h3 className="course-title">ระดับประกาศนียบัตรวิชาชีพ (ปวช.)</h3>
        <p className="course-description">
          หลักสูตรเน้นพัฒนาทักษะพื้นฐานด้านเทคโนโลยีสารสนเทศ เช่น การพัฒนาโปรแกรมคอมพิวเตอร์ 
          การจัดการเครือข่าย และการแก้ไขปัญหาเทคนิคพื้นฐาน นักศึกษาจะได้รับความรู้ด้าน:
        </p>
        <ul className="course-topics">
          <li>การเขียนโปรแกรมพื้นฐาน (Basic Programming)</li>
          <li>การติดตั้งและดูแลระบบเครือข่ายคอมพิวเตอร์ (Networking Basics)</li>
          <li>การออกแบบเว็บไซต์ (Web Design)</li>
        </ul>
        <a 
          href="https://drive.google.com/file/d/16Dn3jtNG2FaLIZA3eZaVv7Vk13sDF1G0/view" 
          className="course-download-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ดาวน์โหลดหลักสูตร ปวช. (PDF)
        </a>
      </div>

      {/* Section: High Vocational Certificate (ปวส.) */}
      <div className="course-section">
        <h3 className="course-title">ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</h3>
        <p className="course-description">
          หลักสูตรนี้มุ่งเน้นความเชี่ยวชาญเฉพาะด้านเพื่อเตรียมความพร้อมสำหรับการทำงานในอุตสาหกรรม 
          หรือการศึกษาต่อในระดับปริญญาตรี นักศึกษาจะได้รับความรู้ในหัวข้อที่ลึกซึ้งกว่า เช่น:
        </p>
        <ul className="course-topics">
          <li>การพัฒนาซอฟต์แวร์ขั้นสูง (Advanced Software Development)</li>
          <li>การจัดการระบบฐานข้อมูล (Database Management)</li>
          <li>ความปลอดภัยทางไซเบอร์ (Cybersecurity)</li>
          <li>การวิเคราะห์ข้อมูล (Data Analytics)</li>
        </ul>
        <a 
          href="https://drive.google.com/file/d/1lCW9E3T-7VDFeZtJ3xV1Iq4c5vNGtdo9/view" 
          className="course-download-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          ดาวน์โหลดหลักสูตร ปวส. (PDF)
        </a>
      </div>
    </div>
  );
}

export default Courses;
