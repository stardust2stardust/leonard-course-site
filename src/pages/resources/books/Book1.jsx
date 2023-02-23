import React from "react";
import bookOneImage from "../../../assets/book1-imageOnly.jpg";
export default function Book1() {
  return (
    <div>
      <div className="book-container">
        <div className="book-card">
          <h1 className="book-title">
            Organic Chemistry Textbook and Solutions Manual
          </h1>

          <img
            alt="picture of text book"
            src={bookOneImage}
            className="book-card--image"
          />

          <p>Michael S. Leonard</p>
        </div>
      </div>
      <div className="book-info-container">
        <div className="download-link-container">
          <h2>Get the book</h2>
         <div>
         <a
            className="download-link"
            href="https://mleonard.gumroad.com/l/organicchemistry"
            target="_blank"
          >
            Free PDF Download
          </a>
          <p className="download-link-instruction">
            (simply enter $0 in the price field).
          </p>
         </div>
          
        </div>
        <h2>About this book</h2>
        <p>
          Organic chemistry is an important subject because it helps us to
          better understand biology and biochemistry. We also interact with and
          consume many organic substances on a daily basis. My goal was to
          provide you with a text that will make this subject as clear as
          possible.
        </p>

        <p>
          Mechanism explains how the reactants (or starting materials) of a
          reaction are converted into products. To master organic chemistry, it
          is essential to master mechanism. There are three very common types of
          questions on organic chemistry exams. You will often be asked to
          predict the product of a chemical reaction, to draw the reaction
          mechanism, or to devise a synthesis of an organic molecule. None of
          these questions can be answered reliably unless you know how the
          reactions work, and that is what mechanism tells us. This book uses a
          novel approach to help you better understand the mechanisms of organic
          transformations.
        </p>

        <p>
          Many organic chemists use color when teaching reaction mechanism.
          Color can be used to highlight the reactants and products in such a
          way that you can follow important features through the reaction. The
          mechanisms in this book are color coded so that you can clearly see
          the changes that take place during the reaction. The electrons
          involved in the mechanism are color coded. The mechanistic arrows
          originating from those electrons have the same color, as do the bonds
          or lone pairs formed by them in the intermediates and products. As a
          result, you can trace specific pairs of electrons through an entire
          transformation. The description of what each mechanistic arrow means
          is color coded correspondingly so that it is easy to match up the text
          with the relevant portion of a reaction diagram. To the best of my
          knowledge, there is no other introductory organic chemistry textbook
          that presents reaction mechanism in this way.
        </p>

        <p>
          Each chapter contains a manageable number of problems. These problems
          will help you to practice and assess your knowledge of the material.
          Sometimes you will even learn something new while completing a
          problem. All of the problems have full solutions in the accompanying
          Solutions Manual for Organic Chemistry. This manual does not merely
          give you the answers to the questions. There is a written explanation
          of each question, and when reaction mechanism is a part of the answer,
          it contains the same color-coded approach described above.
        </p>

        <p>
          I hope that these features of the textbook will make your introduction
          to the field of organic chemistry as clear as possible. You might
          wonder: why an e-book? Textbook costs are extremely high nowadays. In
          part, this is due to the expense of color printing. In order to
          provide you with an affordable textbook and solutions manual, I have
          elected to publish in the e-book format. This also enables you to
          easily carry your book on one or more of your electronic devices
          wherever you go.
        </p>
      </div>
    </div>
  );
}
