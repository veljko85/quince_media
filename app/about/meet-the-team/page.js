'use client'
import React, { useCallback, useEffect, useState } from 'react';
//styles
import styles from './page.module.css'
//GALLERY
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

//MEET THE TEAM
export default function MeetTheTeam() {
  //GALLERY USE STATE
  const [images, setImages] = useState([]);
  const addItem = (imgObj) => {
    setImages(imgObj);
  }
  const getImages = useCallback(() => {
    return images.map((item) => {
      return (
        <a
          key={item.id}
          className="gallery-item"
          data-src={item.src}
        >
          <img
          style={{ width: '300px', height: '200px' }}
            className="img-responsive"
            src={item.src}
          />
        </a>
      );
    });
  }, [images]);

  //FETCH DATA
  let meetTheTeam
  async function fetchData() {
    const meetTheTeamResponse = await fetch(
      `/textContent/meetTheTeam.json`,
    );
    meetTheTeam = await meetTheTeamResponse.json();
    //hero image
    const hero = document.getElementsByClassName(`${styles.hero}`)[0]
    hero.style.backgroundImage = meetTheTeam.hero_image;
    //hero title
    const heroTitle = document.getElementsByClassName(`${styles.heroTitle}`)[0]
    heroTitle.innerHTML = meetTheTeam.title;
    //hero subtitle
    const heroSubTitle = document.getElementsByClassName(`${styles.heroSubTitle}`)[0]
    heroSubTitle.innerHTML = meetTheTeam.sub_title;
    //content heading title
    const contentHeadingTitle = document.getElementsByClassName(`${styles.contentHeadingTitle}`)[0]
    contentHeadingTitle.innerHTML = meetTheTeam.content_heading_title;
    //content heading text
    const contentHeadingText = document.getElementsByClassName(`${styles.contentHeadingText}`)[0]
    contentHeadingText.innerHTML = meetTheTeam.content_heading_text;
    //content main text
    const contentMainTitle = document.getElementsByClassName(`${styles.contentMainTitle}`)[0]
    contentMainTitle.innerHTML = meetTheTeam.content_main_title;
    //content main div
    const containtMainDiv = document.getElementsByClassName(`${styles.contentMain}`)[0]
    //emplyees
    for (let i = 0; i < meetTheTeam.employees.length; i++) {
      
      let employeeDiv = document.createElement('div');
      employeeDiv.classList.add(`${styles.employeeDiv}`)

      let employeeImgDiv = document.createElement('div');
      employeeImgDiv.classList.add(`${styles.employeeImgDiv}`)
      employeeImgDiv.style.backgroundImage = meetTheTeam.employees[i].image;
      employeeDiv.appendChild(employeeImgDiv);
        
      let employeeDataDiv = document.createElement('div');
      employeeDataDiv.classList.add(`${styles.employeeDataDiv}`)
      employeeDiv.appendChild(employeeDataDiv);

      let employeeName = document.createElement('H3')
      employeeName.innerHTML = meetTheTeam.employees[i].name
      employeeDataDiv.appendChild(employeeName);

      let employeeJobDesc = document.createElement('H4')
      employeeJobDesc.innerHTML = meetTheTeam.employees[i].job_description
      employeeDataDiv.appendChild(employeeJobDesc);

      let employeeText = document.createElement('P')
      employeeText.innerHTML = meetTheTeam.employees[i].text
      employeeDataDiv.appendChild(employeeText);

      let employeeFunFact = document.createElement('h3')
      employeeFunFact.innerHTML = meetTheTeam.employees[i].fun_fact
      employeeDataDiv.appendChild(employeeFunFact);
      //arrange style (every other from right side)
      if((i+1) % 2 == 0){
        employeeDiv.children[0].style.order = 1;
        employeeDataDiv.style.marginRight = '1vw'
        employeeDataDiv.style.textAlign = 'right'
      } else {
        employeeDataDiv.style.marginLeft = '1vw'
      }
      //append employeeDiv
      containtMainDiv.appendChild(employeeDiv);
      //devider
      if(i != meetTheTeam.employees.length - 1){
        let deviderDiv = document.createElement('div');
        deviderDiv.classList.add(`${styles.deviderDiv}`)
        //append employeeDiv and deviderDiv
        containtMainDiv.appendChild(deviderDiv);
      }

    }
    
    //gallery
    const galleryTitle = document.getElementsByClassName(`${styles.galleryTitle}`)[0]
    galleryTitle.innerHTML = meetTheTeam.gallery_title;

    const galleryMainImg = document.getElementsByClassName(`${styles.galleryMainImg}`)[0]
    galleryMainImg.style.backgroundImage = meetTheTeam.gallery_main_img;

    //images from json
    let imgObj = [...images]
    for (let i = 0; i < meetTheTeam.gallery.length; i++) {
        let img = { 
          id: `${i}`,
          src: meetTheTeam.gallery[i].imageSrc,
          src: meetTheTeam.gallery[i].imageSrc,
        }
        imgObj.push(img)
      }
    addItem(imgObj)

  }


  
  useEffect(() => {
    // call api or anything
    fetchData()
    console.log("loaded");
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroTitleContainer}>
          <h1 className={styles.heroTitle}></h1>
          <h3 className={styles.heroSubTitle}></h3>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeading}>
          <h2 className={styles.contentHeadingTitle}></h2>
          <br></br>
          <br></br>
          <p className={styles.contentHeadingText}></p>
        </div>
        <div className={styles.contentMain}>
          <h1 className={styles.contentMainTitle}></h1>
        </div>
      </div>
      <div className={styles.galeryContentDiv}>
        <h1 className={styles.galleryTitle}></h1>
        <div className={styles.galleryMainImg}></div>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} id="animated-thumbnails-gallery">{getImages()}
        {/* <a href="/images/gallery/20220222_223527-768x358.jpg">
        <img src="/images/gallery/20220222_223527-768x358.jpg" />
    </a>
    <a className="gallery-item" href="/images/gallery/20220222_223527-768x358.jpg">
        <img className="img-responsive" src="/images/gallery/20220222_223527-768x358.jpg" />
    </a> */}
        </LightGallery>
      </div>
      
    </main>
  )
}