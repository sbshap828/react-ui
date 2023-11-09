function PodDetail({pod}) {
  return (
    <div>
      <h1>Hello, I'm {pod.title}</h1>
      <h2>{pod.date}</h2>
      <img src={pod.hdurl} alt={pod.title} />
      <p>{pod.explanation}</p>
    </div>
  )
}
export default PodDetail