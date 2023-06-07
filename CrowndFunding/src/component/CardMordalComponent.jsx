import PropTypes from 'prop-types';

const CardMordalComponent = (props) => {
    const {topicname ,pledge, paragraph, count, topic,index,cardSelect,SelectCard } = props;
 
    const SelectNewcard=()=>{
        SelectCard(index)
    }

  return (
    <div className={topic || count>0    ?'w-[98%]  mb-8 px-4 py-8 border-[#3cb4ac] border rounded-md xl:px-[1.3rem] active:opacity-50 hover:cursor-pointer xl:relative xl:mb-6'
                                        :" opacity-50 w-[98%]  mb-8 px-4 py-8 border-[#3cb4ac] border rounded-md active:opacity-50 hover:cursor-pointer xl:relative xl:mb-6"}
        onClick={SelectNewcard}>
      <div className={cardSelect === index  ?'flex items-center'
                                            :'hidden'}>
        <div className=' h-[1.3rem] w-[1.3rem] rounded-full  border-2 mr-4'></div>
        <div className='xl:flex xl:justify-between'>
            <h1 className=' font-bold xl:mr-4'>{topicname}</h1>
            <div className=' font-medium text-[#3cb4ac]'>{pledge}</div>
        </div>
      </div>      
      <p className=' mt-8 text-[#147b74]
                    xl:pl-[36px] xl:mt-4'>{paragraph}</p>
      <div className=' xl:absolute xl:-top-2 xl:right-6   xl:flex xl:justify-between xl:items-center'>
        <div className={count>=0 ?'mt-8 flex items-center'
                                :'hidden'}>
          <span className=' text-[2rem] font-bold xl:text-[1.4rem]'>{count}</span> 
          <span className=' ml-2 text-[#147b74]'>left</span>
        </div>
      </div>
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
