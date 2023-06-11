import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import { FifthComponent } from './FirstComponent';
import React from 'react';


export default function LearningComponent(){

    return(
        <div className="App">
      
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
      </div>
    );
}