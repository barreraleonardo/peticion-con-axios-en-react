/* eslint-disable react/prop-types */


export default function Comentario({comentario}) {
  return (
    <div className="card">
        <h3 className="name">{comentario.name}</h3>
        <h5 className="email">{comentario.email}</h5>
        <p className="comentario">{comentario.body}</p>
    </div>
  )
}
