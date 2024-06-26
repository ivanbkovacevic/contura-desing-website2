import React from "react";
import UIUXProcessSteps from "./UIUXProcessSteps/UIUXProcessSteps";
import ResearchStage from "./ResearchStageUX/ResearchStage";
import UIDesignProcess from "./UIDesignProcess/UIDesignProcess";
import ResearchAndDiscovery from "./ResearchAndDiscovery/ResearchAndDiscovery";
import InformationArchitecture from "./InformationArchitecture/InformationArchitecture";
import Design from "./Design/Design";
import VisualDesignMockups from "./VisualDesignMockups/VisualDesignMockups";
import DesignSystem from "./DesignSystem/DesignSystem";
import DesignSpecification from "./DesignSpecification/DesignSpecification";
import Prototyping from "./Prototyping/Prototyping";
import Testing from "./Testing/Testing";
import Conclusion from "./Conclusion/Conclusion";
import Author from "./Author/Author";
import style from "./UIUXDesign.module.scss";

const UIUXDesign = () => {
  return (
    <div className={style.wrapper}>
      <section data-centered="yes">
        <UIUXProcessSteps />
      </section>
      <section data-centered="yes">
        <ResearchStage />
      </section>
      <section data-centered="yes">
        <UIDesignProcess />
      </section>
      <section id="Reach and Discovery" data-centered="yes">
        <ResearchAndDiscovery />
      </section>
      <section id="Information Architecture" data-centered="yes">
        <InformationArchitecture />
      </section>
      <section id="Design" data-centered="yes">
        <Design />
      </section>
      <section data-centered="yes">
        <VisualDesignMockups />
      </section>
      <section data-centered="yes">
        <DesignSystem />
      </section>
      <section data-centered="yes">
        <DesignSpecification />
      </section>
      <section id="Prototyping" data-centered="yes">
        <Prototyping />
      </section>
      <section id="Testing and Iteration" data-centered="yes">
        <Testing />
      </section>
      <section data-centered="yes">
        <Conclusion />
      </section>
      <section data-centered="yes">
        <Author />
      </section>
    </div>
  );
};

export default UIUXDesign;
