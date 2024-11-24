import axios from "axios";

const Mina = () => {
   const Data = async()=>{
const sendata = {
    name:'mian'
};
try{
    const response = await axios.get('http://your-backend-api-endpoint.com',sendata)
} catch (error) {
    console.error('Error sending data:', error);
  }
};
  return "mina";
};

export { Mina };
