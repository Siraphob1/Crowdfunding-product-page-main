import PropTypes from 'prop-types';



const CardComponent = (props) => {
    const {topicname ,pledge, paragraph, count } = props;
    
  return (
    <div className={count>0  ?'w-[98%] mx-auto mb-8 px-4 py-8 border-[#3cb4ac] border rounded-md xl:px-[1.5rem]'
                            :' opacity-50 w-[98%] mx-auto mb-8 px-4 py-8 border-[#3cb4ac] border rounded-md'}>
      <div className='xl:flex xl:justify-between'>
        <h1 className=' font-bold'>{topicname}</h1>
        <div className=' font-medium text-[#3cb4ac]'>{pledge}</div>
      </div>
      <p className=' mt-4 text-[#147b74]'>{paragraph}</p>
      <div className='xl:flex xl:justify-between xl:items-center'>
        <div className='mt-8 flex items-center'>
          <span className=' text-[2rem] font-bold'>{count}</span> 
          <span className=' ml-2 text-[#147b74]'>left</span>
        </div>
        <button className='mt-4 text-white text-[1rem] font-medium bg-[#3cb4ac] px-8 py-3 mr-4 rounded-full'>
          {count>0 ?"Select Reward"
                   :"Out of Stock"}
        </button>
      </div>
    </div>
  )
}
CardComponent.propTypes={
    topicname:PropTypes.string,
    pledge:PropTypes.string,
    paragraph:PropTypes.string,
    count:PropTypes.number
}

export default CardComponent
