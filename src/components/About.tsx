
export default function About() {
  return (
    <>
      <div className="container">
        <section className="about columns-2" id="about">
          <div className="relative pr-8">
            <img className="about-img" alt="working" src="https://img.freepik.com/free-photo/man-woman-working-laptop-together_23-2147707820.jpg?t=st=1732917512~exp=1732921112~hmac=3c40c8b6ea97569489a951f46c5c737f2de75a71640b3046eed1e34a1bc67d2a&w=1380"/>
          </div>
          <div className="relative pr-8 pl-8">
            <h2 className="oswald-font text-blue-dark text-3xl leading-none uppercase">About</h2>
            <h3 className='sawarabi-font text-blue-dark text-lg leading-relaxed uppercase'>World standard wood, From Nara Prefecture</h3>
            <p className='sawarabi-font text-blue-dark text-base font-light pt-8'>Of course, we use cypress, a material from Nara Prefecture, From procurement of raw materials for laminated wood By managing the final product in-house wood needed for construction sites, We deliver it stably.</p>
            <p className="button roboto-font pt-8 text-blue-dark"><a href="#contact">Get in Touch</a></p>
          </div>
        </section>
      </div>
    </>
  );
}
