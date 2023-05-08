import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import useId from "react";
import style from "./ProductDevelopment.module.scss";
import {
  CONCLUSION,
  DESIGN_HEADING,
  DESIGN_PARAGRAPH,
  DESIGN_SPECIFICATION,
  DESIGN_SYSTEM,
  INFORMATION_ARCHITECTURE,
  INFORMATION_ARCHITECTURE_HEADING,
  INFORMATION_ARCHITECTURE_PARAGRAPH,
  PROCESS_STEPS,
  PROCESS_STEPS_HEADING,
  PROCESS_STEPS_LAST_PARAGRAPH,
  PROTOTYPING,
  RESEARCH_AND_DESIGN_PROCESS,
  RESEARCH_AND_DISCOVERY_HEADING,
  RESEARCH_AND_DISCOVERY_PARAGRAPH,
  RESEARCH_STAGE,
  RESEARCH_STAGE_HEADING,
  RESEARCH_STAGE_LAST_PARAGRAPH,
  TESTING,
  UI_DESIGN_PROCESS,
  UI_DESIGN_PROCESS_HEADING,
  UI_DESIGN_PROCESS_LAST_PARAGRAPH,
  VISUAL_DESIGN_MOCKUPS,
  VISUAL_DESIGN_PARAGRAPH,
} from "./constant";

const ProductDevelopment = () => {
  const processSteps = () => {
    return PROCESS_STEPS.map((item) => {
      const keyId = uuidv4();
      return (
        <div key={keyId}>
          <h4>{item.step}</h4>
          <p>{item.description}</p>
        </div>
      );
    });
  };
  const researchStage = () => {
    return RESEARCH_STAGE.map((item) => {
      const keyId = uuidv4();
      return (
        <p key={keyId}>
          <span>{item.span}</span>
          {item.paragraph}
        </p>
      );
    });
  };
  const uiDesignProcess = () => {
    return UI_DESIGN_PROCESS.map((item) => {
      const keyId = uuidv4();
      return <li key={keyId}>{item.li}</li>;
    });
  };
  const researchAndDesignProcessParagraphs = () => {
    return RESEARCH_AND_DESIGN_PROCESS.map((item) => {
      const keyId = uuidv4();
      return <p key={keyId}>{item.paragraph}</p>;
    });
  };
  const informationArchitecture = () => {
    return INFORMATION_ARCHITECTURE.map((item) => {
      const keyId = uuidv4();
      return <li key={keyId}>{item.li}</li>;
    });
  };
  const visualDesignMockups = () => {
    return VISUAL_DESIGN_MOCKUPS.map((item) => {
      const keyId = uuidv4();
      return <li key={keyId}>{item.li}</li>;
    });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.processSteps}>
        <h2>{PROCESS_STEPS_HEADING}</h2>
        {processSteps()}
        <p className={style.paragraphGreen}>{PROCESS_STEPS_LAST_PARAGRAPH}</p>
      </div>
      <div className={style.researchStage}>
        <h2>{RESEARCH_STAGE_HEADING}</h2>
        {researchStage()}
        <p>{RESEARCH_STAGE_LAST_PARAGRAPH}</p>
      </div>
      <div className={style.uiDesignProcess}>
        <h2>{UI_DESIGN_PROCESS_HEADING}</h2>
        <ul>{uiDesignProcess()}</ul>
        <p>{UI_DESIGN_PROCESS_LAST_PARAGRAPH}</p>
      </div>
      <div className={style.researchAndDiscovery}>
        <h2>{RESEARCH_AND_DISCOVERY_HEADING}</h2>
        <p>{RESEARCH_AND_DISCOVERY_PARAGRAPH}</p>
        <div className={style.tableWrapper}>
          <div className={style.upperTable}>
            <div className={style.headingWrapper}>
              <h4>Research and Discovery Process</h4>
              <h6>Here's how we approached this step</h6>
            </div>
            <div className={style.steps}>
              <span>User Research</span>
              <span>Competitive Analysis</span>
              <span>Market Research</span>
              <span>Business Goals</span>
              <span>Defining the Problem</span>
            </div>
          </div>
          <div className={style.lowerTable}>
            {researchAndDesignProcessParagraphs()}
          </div>
        </div>
        <p>
          Help your team understand the strategy behind your research process
        </p>
      </div>
      <div className={style.informationArchitecture}>
        <h2>{INFORMATION_ARCHITECTURE_HEADING}</h2>
        <p>{INFORMATION_ARCHITECTURE_PARAGRAPH}</p>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>
            Help your team understand the strategy behind your Information
            Architecture process
          </p>
        </div>
        <ul>{informationArchitecture()}</ul>
      </div>
      <div className={style.design}>
        <h2>{DESIGN_HEADING}</h2>
        <p>{DESIGN_PARAGRAPH}</p>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Read more by website Figma</p>
        </div>
      </div>
      <div className={style.visualDesignMockups}>
        <h2>Visual Design mockups</h2>
        <ul>{visualDesignMockups()}</ul>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Visual directions example</p>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Visual directions example</p>
        </div>
        <p>{VISUAL_DESIGN_PARAGRAPH}</p>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Applied visual style example</p>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Applied visual style example</p>
        </div>
      </div>
      <div className={style.designSystem}>
        <h2>Design system</h2>
        <ul>
          <li>{DESIGN_SYSTEM[0]}</li>
        </ul>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Design system example</p>
        </div>
        <ul>
          <li>{DESIGN_SYSTEM[1]}</li>
          <li>{DESIGN_SYSTEM[2]}</li>
        </ul>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Components Library example</p>
        </div>
      </div>
      <div className={style.designSpecification}>
        <h2>Design specification</h2>
        <ul>
          <li>{DESIGN_SPECIFICATION[0]}</li>
          <li>{DESIGN_SPECIFICATION[1]}</li>
        </ul>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Example of a static specification</p>
        </div>
        <ul>
          <li>{DESIGN_SPECIFICATION[2]}</li>
        </ul>
      </div>
      <div className={style.prototyping}>
        <ul>
          <li>{PROTOTYPING[0]}</li>
          <li>{PROTOTYPING[1]}</li>
        </ul>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>
            Help your team understand the strategy behind your prototype process
          </p>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image src="/assets/images/footerImageMomci.png" alt="" fill />
          </div>
          <p>Read more by website Figma</p>
        </div>
      </div>
      <div className={style.testing}>
        <h2>Testing and iteration</h2>
        <p>{TESTING[0]}</p>
        <p>{TESTING[1]}</p>
        <div className={style.image}>
          <Image src="/assets/images/footerImageMomci.png" alt="" fill />
        </div>
        <div className={style.image}>
          <Image src="/assets/images/footerImageMomci.png" alt="" fill />
        </div>
        <div className={style.image}>
          <Image src="/assets/images/footerImageMomci.png" alt="" fill />
        </div>
      </div>
      <div className={style.conclusion}>
        <h2>Conclusion</h2>
        <p>{CONCLUSION[0]}</p>
        <p>{CONCLUSION[1]}</p>
      </div>
      <div className={style.author}>
          <Image src="/assets/images/footerImageMomci.png" alt="" width={80} height={80} />
          <div>
            <h6>Igor Mijucic</h6>
            <p>CEO & Product Designer</p>
          </div>
      </div>
    </div>
  );
};

export default ProductDevelopment;
