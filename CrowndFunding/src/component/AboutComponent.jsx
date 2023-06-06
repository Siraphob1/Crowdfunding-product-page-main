import CardComponent from "./CardComponent"

const AboutComponent = () => {
  const person=[
    { topicname:"Bamboo Stand", 
      pledge:"Pledge $25 or more", 
      paragraph:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      count:101     
    },
    {
      topicname:"Black Edition Stand", 
      pledge:"Pledge $75 or more", 
      paragraph:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      count:64
    },
    {
      topicname:"Mahogany Special Edition", 
      pledge:"Pledge $200 or more", 
      paragraph:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      count:0
    }
  ]
  return (
    <section className=" bg-white rounded-lg  px-5 pt-8 py-4 mt-6
                        sm:px-10 sm:pt-10 ">
        <h1 className=" text-[1.3rem] font-bold mb-8">About this project</h1>
        <div className="text-[text-[#7a7a7a]]">
            <p className="mb-8 ">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className="mb-8">
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
        </div>
        <CardComponent {...person[0]} key={1} />   
        <CardComponent {...person[1]} key={2} />  
        <CardComponent {...person[2]} key={3} /> 
    </section>

  )
}


export default AboutComponent
