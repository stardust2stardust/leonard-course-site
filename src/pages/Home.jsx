import introPhoto from "../assets/mike_leonard_website photo.jpg";
import SecondaryNav from "../components/SecondaryNav";
import article from "../assets/Why_I_Teach_Article.pdf";

export default function Home() {
  return (
   
      <div className="page-content">
        <section className="intro-section">
          <div className="intro-grid">
            <h1 className="professor-name page-title">Michael S. Leonard, Ph.D.</h1>
            <h2 className="professor-title">Professor of Chemistry</h2>
            <img
              src={introPhoto}
              alt="photo of Michael Leonard, PhD"
              className="intro-photo"
            />
            <a href={article} className="link-to-article" target="_blank">
              Why I Teach
            </a>
          </div>
          </section>
          <hr />
          <section className="about-and-degrees">
          <div className="about">
          <h3>About</h3>
          <p>
            Michael Leonard is a professor in the Department of Chemistry. He
            teaches introductory, intermediate and advanced organic chemistry.
            Dr. Leonard has also taught biochemistry and courses for non-science
            majors, including “Science & Art” and “Molecules That Changed The
            World.” His JayTerm course, “Easing the transition from Organic
            Chemistry I to II,” flips the classroom and involves students in
            interactive problem solving. Dr. Leonard’s research is focused on
            the preparation of bioactive molecules through novel synthetic
            methodology. Students conduct research in Dr. Leonard’s laboratory
            throughout the academic year and have presented their results at
            regional and national meetings.
          </p>
          </div>
          <div className="degrees">
          <h3>Degrees</h3>
          <p>
            Ph.D. Chemistry (Organic/Bioorganic Chemistry), University of
            Pennsylvania; B.A. Chemistry with ACS Certification, Goucher College
          </p>
          </div>
         
          
          
          
          </section>
          
        

       
      </div>

  );
}
