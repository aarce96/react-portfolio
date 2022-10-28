import React from "react";
import coverImage from "../../assets/cover/Arturo-Arce.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "50%" }}
        alt="cover"
      />
      <p>
        My name is Arturo Arce, and I am a native New Yorker. Football is
        something that I cannot live without, it was first sparked by my
        discovery of the Spanish club, Real Madrid, in my early teenage years
        that pushed me to pursue the sport. It was the club’s grandeur at that
        time that attracted me to the team but, it has since shifted to their
        perseverance, especially in this past season. The club was not seen as a
        legitimate contender for the UEFA Champions League cup and faced
        criticism from a multitude of football analysts, many of whom are
        retired players. Despite this common sentiment the team was still able
        to go the distance and win. Their will to hold on, and improve is what
        makes me want to support them. As well as to go through my own life with
        the same attitude of assessing weakness and striving to overcome them.
      </p>
    </section>
  );
}

export default About;
