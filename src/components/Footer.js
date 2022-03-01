import react from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <PageWrapper>
      <div className="footerMain">
        <div>Copyright © 2022. All rights reserved.</div>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.footer`
  .footerMain {
    display: flex;
    align-items: center !important;
    vertical-align: bottom;
    justify-content: center !important;
    flex-direction: row;
    //max-width: 1600px;
    //margin: 5 auto;
    position: -webkit-sticky;
    position: sticky;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 40px;
    //padding: 1rem 1.5rem;
    background: purple;
    border-bottom: 5px solid black;
    z-index: 999;
    color: white;
    font-size: 0.9em;
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    .FooterMain {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
`;
