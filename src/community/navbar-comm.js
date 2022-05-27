import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import AddNewPost from "./add-new-post";
import '../Pages/mainpage.css'
import './comm.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Box className="box-nav" position="sticky" top={0} p={0.5} bg="gray.100" zIndex={1}>
      <div className="button-1">
        <Link to="/mainpage" className="button-comm" >Home</Link>
      </div>
      <div className="head-greet-div">
        <ul className="head-greet">WELCOME TO COMMUNITY!</ul>
      </div>
      <div className="button-2">
        <AddNewPost/>
        </div>    
      <div className="comm-user" >
        Hi, {localStorage.getItem('Name')}
      </div>
    </Box>
  );
};

export default Navbar;