import React from "react";

import Project from "../../components/Project/Project";


export default function ProjectsScreen() {
  return (
    <div className="screen-background">
       <Project
      title= {<p>Maxim Derevyagin, Anastasiia Minenkova, Nathan Sun. <i>A Theorem of Joseph-Alfred Serret and its Relation to Perfect Quantum State Transfer.</i></p>}
      link = "https://arxiv.org/abs/1912.11978"
      ></Project>
       <Project
      title = {<p>Aman Agrawal, Caroline Choi, Nathan Sun. <i>On Permutation Weights and q-Eulerian Polynomials.</i></p>}
      link = "https://arxiv.org/abs/1809.07398"
      ></Project>
       <Project
      title = "Some cool GANs that I built with Penny Brant, MIT '24."
      link = "https://github.com/Pen721/2019CS999FinalProject"
      ></Project>
    </div>
  );
}