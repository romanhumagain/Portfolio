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
      <div className='grid grid-cols-12 gap-2 p-6 md:gap-5'>
        <div className='flex flex-col col-span-4 gap-5'>
          <div className=''>
            <img src={blogify_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
          <div>
            <img src={task_unity_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
          <div>
            <img src={student_management_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
          <div className=''>
            <img src={taxi_booking_png} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
          <div>
            <img src={hotel_management_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>

        </div>

        <div className='flex flex-col items-center justify-center col-span-4 gap-5 '>
          <div className='flex flex-col justify-center gap-5 '>
            <img src={food_delivery_app_img} className='cursor-pointer w-[67px] transition-transform duration-700 rounded-lg h-[136px] hover:scale-105 md:h-48 md:w-24' alt='Food Delivery' />
            <img src={news_app} className='cursor-pointer w-[65px] transition-transform duration-700 rounded-lg h-[136px] hover:scale-105 md:h-48 md:w-24' alt='News App' />
          </div>
        </div>

        <div className='flex flex-col col-span-4 gap-6'>
          <div>
            <img src={food_ordering_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
          <div>
            <img src={chatbot_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>

          <div>
            <img src={news_web_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
          <div>
            <img src={weather_app} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
          <div>
            <img src={techx_img} className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'></img>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProjectCard