import './section.css'

export const Section = (props) => {
  return <section className={`container ${props.className ?? ''}`}>
    <h2 className='header'>{props.header}</h2>
    {props.children}
  </section>
}
