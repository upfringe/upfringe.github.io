'use client'
import React from 'react'
import {DotLottiePlayer} from '@dotlottie/react-player'

const LottieAnimation = ({src}:{src:string}) => {
  return (
    <DotLottiePlayer src={src} autoplay loop  />
  )
}

export default LottieAnimation