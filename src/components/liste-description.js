import React from 'react'
import Item from './item-description'
const tab = [
    { parag: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere." },
    { parag: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients." }]


const Liste=()=>{
    return (<div className="description" >
        {tab.map((el,index)=><Item   item={el}  key={index} />)}
    </div>

    )
}
export default Liste