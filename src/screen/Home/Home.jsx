import React, {useContext, useEffect} from "react";
import Container from "@mui/material/Container";
import {showTime} from "../../utils/time";
import {PublicContext} from "../../context/context";
import {Typography} from "@mui/material";

const Home = () => {
    const {timer, setTimer} = useContext(PublicContext)
    useEffect(() => {
        setTimeout(() => {
            setTimer(showTime())
        }, 1000)
    })
    return (
        <Container sx={{
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Typography variant={'h3'} sx={{
                color:'#578bff',
                fontFamily:'vazir'
            }}>
                {
                    timer
                }
            </Typography>

        </Container>
    )
};
export default Home;
