'use client'
import React, { useState, useEffect } from 'react';
import styles from './page.module.css'

export default function MeetTheTeam() {

  async function fetchData() {
    const meetTheTeamResponse = await fetch(
      `/textContent/meetTheTeam.json`,
    );
    const meetTheTeam = await meetTheTeamResponse.json();

    const hero = document.getElementsByClassName(`${styles.hero}`)[0]
    hero.style.backgroundImage = meetTheTeam.hero_image;
    
    const heroTitle = document.getElementsByClassName(`${styles.heroTitle}`)[0]
    heroTitle.innerHTML = meetTheTeam.title;

    const heroSubTitle = document.getElementsByClassName(`${styles.heroSubTitle}`)[0]
    heroSubTitle.innerHTML = meetTheTeam.sub_title;

    const contentHeadingTitle = document.getElementsByClassName(`${styles.contentHeadingTitle}`)[0]
    contentHeadingTitle.innerHTML = meetTheTeam.content_heading_title;

    const contentHeadingText = document.getElementsByClassName(`${styles.contentHeadingText}`)[0]
    contentHeadingText.innerHTML = meetTheTeam.content_heading_text;
    
    const contentMainTitle = document.getElementsByClassName(`${styles.contentMainTitle}`)[0]
    contentMainTitle.innerHTML = meetTheTeam.content_main_title;
    
    const containtMainDiv = document.getElementsByClassName(`${styles.contentMain}`)[0]

    // meetTheTeam.employees.forEach(employee => {

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
      console.log(employeeDiv)

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

      if((i+1) % 2 == 0){
        console.log(employeeDataDiv[0])
        // employeeDataDiv[1].style.order = 0;
        employeeDataDiv.style.textAlign = 'right'
        employeeDataDiv.style.flexDirection = 'column-reverse'
      }
      
      containtMainDiv.appendChild(employeeDiv);

    }

    // });

    console.log(meetTheTeam)
  }
  
  useEffect(() => {
    // call api or anything
    fetchData()
    console.log("loaded");
  });

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
    </main>
  )
}