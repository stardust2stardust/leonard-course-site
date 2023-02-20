import React from "react";
import bookTwoImage from "../../../assets/book2-imageOnly.jpg";

export default function Book2() {
  return (
    <div className="page-content">
      <div className="book-container">
        <div className="book-card">
          <div className="title-section">
            <h1 className="book-title">
              Introductory Organic Reaction Mechanisms:
            </h1>
            <p className="subtitle">A color-coded approach to arrow pushing</p>
          </div>

          <img
            alt="picture of text book"
            src={bookTwoImage}
            className="book-card--image"
          />

          <p>Michael S. Leonard</p>
        </div>
      </div>
      <div className="book-info-container">
        <div className="download-link-container multiple-links">
          <a
            href="https://www.lulu.com/shop/michael-leonard/introductory-organic-reaction-mechanisms-a-color-coded-approach-to-arrow-pushing/paperback/product-21240857.html?showPreview=true&page=1&pageSize=4"
            target="_blank"
          >
            Hard copy via Lulu
          </a>

          <a
            href="https://www.amazon.com/dp/1304515893?ref_=cm_sw_r_mwn_dp_7KNMP1WY7TV4SNPP7KQG"
            target="_blank"
          >
            Hard copy via Amazon
          </a>
          <a
            href="https://www.scribd.com/doc/174107198/Introductory-Organic-Reaction-Mechanisms-A-color-coded-approach-to-arrow-pushing"
            target="_blank"
          >
            Electronic form via Scribd
          </a>
        </div>
        <h3>About this book</h3>
        <p>
          Check out excerpts from the book{" "}
          <a
            href="https://www.youtube.com/user/OrganicMechanisms"
            target="_blank"
          >
            here
          </a>
          .
        </p>

        <p>
          To master Organic Chemistry, it is essential to master mechanism.
          Think about three of the most common types of questions on Organic
          Chemistry exams. You are often asked to predict the product of a
          chemical reaction, to draw the reaction mechanism, or to devise a
          synthesis of an organic molecule. None of these questions can be
          answered reliably unless you know how the reactions work, and that is
          what mechanism tells us. This book uses a novel approach to help you
          better understand the mechanisms of organic transformations.
        </p>

        <p>
          The mechanisms of 80 common organic reactions are presented herein.
          Each one is color coded so that you can clearly see the changes that
          take place during the reaction. The electrons involved in the
          mechanism are color coded, as are the arrows originating from those
          electrons and the bonds or lone pairs formed by them in the
          intermediates and product. As a result, you can trace specific pairs
          of electrons through an entire transformation. The description of what
          each mechanistic arrow means is color coded correspondingly so that it
          is easy to match up the text with the relevant portion of a reaction
          diagram.
        </p>

        <p>
          There are 80 entries in this book, one for each reaction mechanism.
          Within these entries, you will find an overview of the reaction, a
          generic mechanism, a mechanism for a specific example, and a reaction
          summary. Where it is relevant, you will also find sections devoted to
          subtleties such as regiochemistry, stereochemistry, and/or carbocation
          rearrangement. The reactions are divided among the substrates whose
          behavior they describe. You will find acid-base chemistry along with
          reactions of alkanes, alkyl halides, alcohols, ethers, alkenes,
          alkynes, dienes, aromatic rings, aldehydes and ketones, carboxylic
          acid derivatives, alpha carbons, and amines. This categorization
          allows you to easily match up topics in this book with the topics you
          are covering in your Organic Chemistry class. If you are reviewing for
          the GRE, MCAT, or other standardized exams, you may find it more
          efficient to review the concise mechanistic entries in this book than
          to review all of your original course notes.
        </p>

        <p>
          I hope that this book will be a helpful resource for students who are
          taking Organic Chemistry for the first time, as well as for those who
          are reviewing the course material for one reason or another. Once you
          have mastered the mechanisms in this book, you will find it easier to
          rationally predict reaction products. You will also find it easier to
          propose thoughtful syntheses. You might even find yourself using
          colored pencils or pens as you draw mechanisms! I hope that you will
          enjoy this book and that it will make it easier for you to learn
          Organic Chemistry.
        </p>
      </div>
    </div>
  );
}
