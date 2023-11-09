import { useNavigate } from 'react-router-dom';

function Pod({ pod, setPod }) {

  let navigate = useNavigate()

  function handleClick(){
    setPod(pod)
    navigate("/PodDetail")
  }

  return (
    <div onClick={handleClick}>
        <img className="pod-images" src={pod.hdurl} alt={pod.title} />
    </div>
  )
}

export default Pod