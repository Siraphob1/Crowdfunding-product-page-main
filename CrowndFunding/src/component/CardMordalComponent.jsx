import PropTypes from 'prop-types';
import { useState } from 'react';

const CardMordalComponent = (props) => {
    const {topicname ,pledge, paragraph, count, topic,index,cardSelect,SelectCard } = props;
 
    const [price,setPrice] = useState("$ 25")

    const SelectNewcard=()=>{
        SelectCard(index)
    }

    const SetNewPrice=(event)=>{
        setPrice(event.target.value)
    }

    const Save=(event)=>{
        event.preventDefault()
    }

    const cardshow= topic || count> 0   ?"card-mordal border opacity-80 active:opacity-50 xl:px-[1.3rem]"
                                        :"card-mordal border opacity-20";
 

  return (
    <div className={index == cardSelect ?'card-mordal border-4 opacity-100 active:opacity-90 xl:px-[1.3rem]  '
                                        : cardshow}
        onClick={SelectNewcard}>
      <div className='flex items-center'>
        <div className=' h-[1.3rem] w-[1.3rem] rounded-full  border-2 mr-4 flex justify-center items-center'>
            <div className={index == cardSelect ?'h-[0.7rem] w-[0.7rem] bg-[#3cb4ac]  rounded-full'
                                                :'hidden'}></div>
        </div>
        <div className='xl:flex xl:justify-between'>
            <h1 className=' font-bold xl:mr-4'>{topicname}</h1>
            <div className=' font-medium text-[#3cb4ac]'>{pledge}</div>
        </div>
      </div>      
      <p className=' mt-8 text-[#147b74]
                    xl:pl-[36px] xl:mt-4'>{paragraph}
      </p>
      <div className=' xl:absolute xl:-top-2 xl:right-6   xl:flex xl:justify-between xl:items-center'>
        <div className={count>=0 ?'mt-8 flex items-center'
                                :'hidden'}>
          <span className=' text-[2rem] font-bold xl:text-[1.4rem]'>{count}</span> 
          <span className=' ml-2 text-[#147b74]'>left</span>
        </div>
      </div>
      <form className={index == cardSelect  ?" block"
                                            :" hidden"}
            onSubmit={Save}>
        <div className='flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-center mt-8 pt-8 border-t-2 '>
            <input type="text" placeholder='Enter your pledge' className=' py-3 px-3 rounded-full mb-4 xl:mb-0'/>
            <div className='flex items-center'>
                <input type="text" onChange={SetNewPrice} value={price} className='px-6 py-3 w-[6rem] bg-white text-black font-bold border-2 rounded-full mr-2  focus:border-[#147b74]'/>
                <button className='btn-click px-6 text-[1rem]'>Continue</button>
            </div>
        </div>
      </form>
    </div>
  )
}
CardMordalComponent.propTypes={
    topicname:PropTypes.string,
    pledge:PropTypes.string,
    paragraph:PropTypes.string,
    count:PropTypes.number,
    topic:PropTypes.bool,
    index:PropTypes.number,
    cardSelect:PropTypes.number,
    SelectCard:PropTypes.func
}

export default CardMordalComponent;
