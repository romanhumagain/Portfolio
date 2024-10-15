import blogify_img from '../../assets/images/portfolio/blogify.png'
import task_unity_img from '../../assets/images/portfolio/task_unity.png'
import techx_img from '../../assets/images/portfolio/techx.png'
import student_management_img from '../../assets/images/portfolio/student_management.png'
import taxi_booking_png from '../../assets/images/portfolio/taxi_booking.png'
import hotel_management_img from '../../assets/images/portfolio/hotel_management.png'
import food_delivery_app_img from '../../assets/images/portfolio/food_delivery_app.png'
import food_ordering_img from '../../assets/images/portfolio/food_odering.png'
import chatbot_img from '../../assets/images/portfolio/AI-ChatBot.png'
import news_web_img from '../../assets/images/portfolio/news_app.png'
import weather_app from '../../assets/images/portfolio/weather-app.png'
import news_app from '../../assets/images/portfolio/flutter_news_app.jpg'



const ProjectCard = () => {
  return (
    <>
      <div className='grid items-center grid-cols-12 gap-5'>
        <div className='flex flex-col col-span-4 gap-5'>
          <div className=''>
            <img src={blogify_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
          <div>
            <img src={task_unity_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
          <div>
            <img src={student_management_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
          <div className=''>
            <img src={taxi_booking_png} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>

        </div>

        <div className='flex flex-col col-span-4 gap-5'>
          <div className='flex gap-2'>
            <img src={food_delivery_app_img} className='transition-transform duration-700 rounded-lg hover:scale-105' height={75} width={90}></img>
            <img src={news_app} height={75} className='transition-transform duration-700 rounded-lg hover:scale-105' width={85}></img>
          </div>

          <div>
            <img src={techx_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
          <div>
            <img src={hotel_management_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
          <div>
            <img src={task_unity_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>

        </div>

        <div className='flex flex-col col-span-4 gap-6'>
          <div>
            <img src={food_ordering_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
          <div>
            <img src={chatbot_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>

          <div>
            <img src={news_web_img} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
          <div>
            <img src={weather_app} className='transition-transform duration-700 rounded-lg hover:scale-105'></img>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProjectCard