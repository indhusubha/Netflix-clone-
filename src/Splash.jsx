import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Profile");
    },5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
   
      <video className="splash" autoPlay muted >
        <source  src="/img/net.mp4" type="" />
      </video>
      
  
  );
}

export default Splash;