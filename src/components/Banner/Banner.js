import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';


const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner2.jpg)"
    },
    bannercontent: {
        display: "flex",
        height: 350,
        flexDirection: "column",
        paddingTop: 15,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}))
const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannercontent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={
                            {
                                fontWeight: "bold",
                                marginBottom: 15,
                                fontFamily: "Montserrat",
                            }
                        }

                    >Crypto Tracker</Typography>
                    <Typography
                        variant='subtitle2'
                        style={
                            {
                                fontFamily: "Montserrat",
                                color: "darkgrey",
                                textTransform: "capitalize",
                            }}
                    >Get All the info regarding Crypto currency</Typography>
                </div>
                <Carousel/>
            </Container>
        </div>
    )
}

export default Banner