import axios from 'axios';


const API_BASE_URL = 'https://apistaging.inclass.app';
const API_NAME = 'api';
const API_VERSION = 'v1';
const ListCourses = async () =>{
  const repsonse =  await axios.get(`${API_BASE_URL}/${API_NAME}/${API_VERSION}/courses_filtering`,{
        params:{
            'page[number]': 1,
            'page[size]': 5,
            'course_name': 'English',
        }
    })
    return repsonse.data.data.courses;
}

export default ListCourses;