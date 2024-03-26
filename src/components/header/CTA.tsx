import React from "react";
import CV from "../../assets/CV_Betania_Amaral.pdf";
import { ctaData } from "../../constants/headerData";

const CTA = () => {
  const { btnCv, BtnContact } = ctaData;

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {btnCv}
      </a>
      <a href="#contact" className="btn btn-primary">
        {BtnContact}
      </a>
    </div>
  );
};

export default CTA;
