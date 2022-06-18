/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Learn2Earn from '../../assets/recentprojects/Learn2Earn.png';
import BlockExplorer from '../../assets/recentprojects/BlockExplorer.png';
import Blockchain from '../../assets/recentprojects/Blockchain.png';
import Quizzical from '../../assets/recentprojects/Quizzical.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Learn to Earn',
      description: `Eth Dapp that rewards students financially for completing daily assignments`,
      alter: 'Learn to Earn',
      image: `${Learn2Earn}`,
    },
    {
      id: 2,
      title: 'ETH Block Explorer',
      description: `Ethereum Block explorer clone of https://etherscan.io. Built with Ethers, React Router, React Bootstrap, Axios and Express.`,
      alter: 'Block Explorer',
      image: `${BlockExplorer}`,
    },
    {
      id: 3,
      title: 'Proof of Work Blockchain',
      description: `Single miner full-node implementation of a PoW blockchain running on one machine, based on source code from https://github.com/ChainShot/PoW-Chain`,
      alter: 'PoW Blockchain',
      image: `${Blockchain}`,
    },
    {
      id: 4,
      title: 'Quizzical',
      description: `Final project for Scrimba's Learn React for Free course`,
      alter: 'Quizzical',
      image: `${Quizzical}`,
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
