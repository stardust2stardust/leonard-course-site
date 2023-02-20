import React from "react";
import separatorIcon from "../assets/benzene-dark.svg";
import ResearchGroup from "../components/ResearchGroup";

export default function Research() {
  return (
    <div className="page-content">
      <h1 className="page-title">Research</h1>
      <section className="inner-content research">
        <h2>
          Below are examples of published, peer-reviewed papers from my group:
        </h2>
        <ul className="research-list">
          <li>
            Leonard, M. S. "
            <a
              href="https://www.arkat-usa.org/arkivoc-journal/browse-arkivoc/2013/1/"
              target="_blank"
            >
              The aporhoeadane alkaloids
            </a>
            ." Archive for Organic Chemistry (ARKIVOC), 2013 (i) 1-65.
          </li>
          <li>
            <img
              className="benzene-divider"
              src={separatorIcon}
              alt="benzene"
            />
          </li>
          <li>
            Piko, B. E.; Keegan, A. L.; Leonard, M. S. “
            <a
              href="https://www.sciencedirect.com/science/article/pii/S0040403911003005"
              target="_blank"
            >
              A concise synthesis of the aporhoeadane skeleton
            </a>
            .” Tetrahedron Letters. 2011, 52(16), 1981-1982.
          </li>
          <li>
            <img
              className="benzene-divider"
              src={separatorIcon}
              alt="benzene"
            />
          </li>
          <li>
            Carbaugh, A. D.; Vosburg, W.; Scherer, T. J.; Castillo, C. E.;
            Christianson, M. A.; Kostarellas, J.; Gosai, S. J.; Leonard, M. S. “
            <a href="https://www.arkat-usa.org/get-file/19339/" target="_blank">
              A concise synthesis of substituted benzoates
            </a>
            .” Archive for Organic Chemistry(ARKIVOC), 2007 (xii) 43-54.
          </li>
          <li>
            <img
              className="benzene-divider"
              src={separatorIcon}
              alt="benzene"
            />
          </li>
          <li>
            Tomasevich, L. L.; Kennedy, N. M.; Zitelli, S. M.; Hull, R. T., II;
            Gillen, C. R.; Lam, S. K.; Baker, N. J.;Rohanna, J. C.; Conley, J.
            M.; Guerra, M. L.; Starr, M. L.; Sever, J. B.; Carroll, P. J.;
            Leonard, M. S. “
            <a
              href="https://www.sciencedirect.com/science/article/pii/S0040403906023446"
              target="_blank"
            >
              Ninhydrin as a building block for yohimbanones, β-carbolines, and
              oxyprotoberberines
            </a>
            ." Tetrahedron Letters. 2007, 48(4), 599-602.
          </li>
        </ul>
      </section>
      <section>
        <ResearchGroup />
      </section>
    </div>
  );
}
