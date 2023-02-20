import React from "react";
import bookThreeImage from "../../../assets/book3-imageOnly.jpg";

export default function Book3() {
  return (
    <div className="page-content">
      <div className="book-container">
        <div className="book-card">
          <h1 className="book-title">
            Intermediate Organic Chemistry Textbook
          </h1>

          <img
            alt="picture of text book"
            src={bookThreeImage}
            className="book-card--image"
          />

          <p>Michael S. Leonard</p>
        </div>
      </div>

      <div className="book-info-container">
        <div className="download-link-container multiple-links">
          <a href="https://www.lulu.com/shop/michael-leonard/intermediate-organic-chemistry/paperback/product-21107718.html?page=1&pageSize=4">
            Hard copy via Lulu
          </a>{" "}
          <a href="https://www.amazon.com/dp/1304217566?ref_=cm_sw_r_mwn_dp_2J9065RN4FK7BVKBT0GP">
            Hard copy via Amazon
          </a>
          <a href="https://www.scribd.com/doc/152768407/Intermediate-Organic-Chemistry">
            Electronic form via Scribd
          </a>
          <a href="https://mleonard.gumroad.com/l/intermediateorganicchemistry">
            Electronic form via Gumroad
          </a>
          The latter site allows you to purchase a PDF download of the text.
        </div>

        <h3>About this book</h3>
        <p>
          The mission of the text is to bridge the gap between introductory
          Organic Chemistry coursework and advanced/graduate-level coursework
          but to do so in a way that extends the student-centered approach of
          most modern introductory Organic Chemistry textbooks. This text makes
          extensive use of detailed explanations and color coding to facilitate
          the learning process. The intended student audience is juniors and
          seniors at the undergraduate level who are taking an Intermediate or
          Advanced Organic Chemistry class.
        </p>

        <p>
          This text's style is one that is shared by many instructors of Organic
          Chemistry: mechanistically driven and detailed. Extensive use of color
          coding helps students to learn mechanism and cogently predict reaction
          products. The electrons that are mechanistically involved in each
          transformation are color coded. The mechanistic arrows originating
          from those electrons are colored identically, as are the bonds and/or
          lone pairs that result from the electron flow. This approach, along
          with detailed verbal explanations, conveys the narrative of the
          mechanism.
        </p>

        <p>
          The text begins with a section on Structure Solving (Part I), which
          contains chapters on Mass Spectrometry, Nuclear Magnetic Resonance,
          and Infrared Spectroscopy. A novel feature of this part of the text is
          a chapter on Structure Elucidation. In this chapter, students engage
          in a detailed discussion of applying the principles they have learned
          to actual structure-solving problems. There are six structure
          elucidation “case studies” that help students to orchestrate
          fundamental concepts as they approach practical problems.
        </p>

        <p>
          The text then progresses to Part II: Aromatic Chemistry Expanded. The
          first chapter in this section discusses the diazotization of aryl
          amines and the substitution or coupling reactions that follow. The
          second chapter in this section focuses on aryl halides and their
          addition-elimination (SNAr) reactions, as well as their
          elimination-addition (benzyne) reactions.
        </p>

        <p>
          In Part III (Radical Reactions), students first encounter a chapter on
          Basic radical chemistry, which is useful since this topic sometimes
          receives less attention in introductory courses than heterolytic
          processes. The next chapter in this section is a discussion of
          Advanced radical chemistry that addresses synthetically useful radical
          transformations and culminates in an example from the primary
          literature.
        </p>

        <p>
          Part IV of the text introduces new ionic reactions through chapters on
          the synthesis of: alkenes; alcohols; amines; aldehydes, ketones, and
          their derivatives; and carboxylic acids and their derivatives. The
          latter four chapters in this five-chapter series also discuss the
          relevant protecting group chemistry for each functionality. These
          chapters explore a series of named reactions and/or modern methods for
          the preparation of commonly occurring functional groups.
        </p>

        <p>
          Finally, the text concludes with an overview of Polymers in Part V.
          There is a chapter on chain-growth polymers, which incorporates
          concepts from the prior section on Radical Chemistry. There is also a
          chapter on step-growth polymers, which reinforces the topic on Ionic
          Reactions and culminates with a short introduction to dendrons and
          dendrimers.
        </p>

        <p>
          Each chapter includes a set of problems, most of which incorporate
          compounds or reactions found in the primary chemical literature.
          Detailed solutions to these problems are found at the end of the text
          and include the same color-coding approach used throughout the book.
        </p>
      </div>
    </div>
  );
}
