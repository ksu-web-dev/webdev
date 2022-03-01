import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <PageWrapper>
      <div className="headerMain">
        <div className="headerTitle">KSU Website Development Club</div>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.header`
  position: -webkit-sticky;
  position: sticky;
  //position: fixed;
  top: 0;
  //width: 100%;
  //padding: 1rem 1.5rem;
  background: purple;
  border-bottom: black;
  z-index: 999;
  .headerMain {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    max-width: 1500px;
    margin: 5 auto;
  }
  .headerTitle {
    font-size: 1.6em;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
  }
`;
