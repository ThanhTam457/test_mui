'use client'
import { Box, Card, Typography } from "@mui/material";
import Flicking, { ALIGN } from "@egjs/flicking";
import { useEffect, useRef, useState } from "react";
import {Sync} from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

const data = [
    '/images/p1_f7.png',
    '/images/p2_f7.png',
    '/images/p3_f7.png',
    '/images/p4_f7.png',
    '/images/p5_f7.png',
    '/images/p6_f7.png',
    '/images/p7_f7.png',
    '/images/p8_f7.png',
    '/images/p9_f7.png',
    '/images/p10_f7.png',
    '/images/p11_f7.png',
    '/images/p12_f7.png',
]

const Logo_Carousel = () => {

    const flicking0 = useRef();
    const flicking1 = useRef();
    const flicking2 = useRef();

const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    setPlugins([new Sync({
      type: "camera",
      synchronizedFlickingOptions: [
        {
          flicking: flicking0.current,
          isClickable: false
        },
        {
          flicking: flicking1.current,
          isClickable: false
        },
        {
          flicking: flicking2.current,
          isClickable: false
        }
      ]
    })]);
  }, []);

    return(
        // <Flicking ref={flicking0}
        //     className="mb-4"
        //     align="prev"
        //     bound={true}
        //     bounce={30}
        //     plugins={plugins}>
        //     <span className="button mr-2 is-white">🍎 Apple</span>
        //     <span className="button mr-2 is-white">🍉 Watermelon</span>
        //     <span className="button mr-2 is-white">🥝 Kiwi</span>
        //     <span className="button mr-2 is-white">...</span>
        // </Flicking>
        // <Flicking ref={flicking1}
        //     className="mb-4"
        //     align="prev"
        //     bound={true}
        //     bounce={30}>
        //     <span className="button mr-2 is-white">🍔 Hamburger</span>
        //     <span className="button mr-2 is-white">🍕 Pizza</span>
        //     <span className="button mr-2 is-white">🍞 Bread</span>
        //     <span className="button mr-2 is-white">...</span>
        // </Flicking>
        <Box>
            {/* @ts-expect-error Server Component */}
            <Flicking ref={flicking0}
                className="mb-4"
                align="prev"
                bound={true}
                bounce={30}
                plugins={plugins}>
                {data.map((item => {
                    <Box>
                        <img src={`${item}`} alt="" />
                    </Box>
                }))}
            </Flicking>
            {/* @ts-expect-error Server Component */}
            <Flicking ref={flicking1}
                className="mb-4"
                align="prev"
                bound={true}
                bounce={30}
                plugins={plugins}>
                {data.map((item => {
                    <Box>
                        <img src={`${item}`} alt="" />
                    </Box>
                }))}
        </Flicking>

        </Box>
    );
}
 
export default Logo_Carousel;

