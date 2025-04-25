import React from 'react';
import { Button } from '../button'
import MeinImage from '../../images/image-hero-desktop.png'
import MeinImageMobile from '../../images/image-hero-mobile.png'
import { ReactComponent as Databiz } from '../../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg'
import { ReactComponent as Meet } from '../../images/client-meet.svg'
import { ReactComponent as Maker } from '../../images/client-maker.svg'

export const MainSection = () => {
  return (
    <section className='w-full flex-col xl:flex-row flex mt-20 h-screen justify-between'>
      <div className='order-2 xl:w-2/4 xl:order-1 text-center xl:text-left relative text-left mt-12 xl:mt-60'>
        <h1 className='text-3xl xl:text-8xl font-black xl:whitespace-pre-line'>{`Make\n remote work`}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line">{`Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n Facilis ad nisi laboriosam. Nihil, minima dicta cum, numquam similique doloremque officia quo asperiores sequi libero maiores\n nobis molestias placeat dolorum itaque.`}</p>
        <Button isFilled={ true }>Learn more</Button>
        <div className="flex justify-around xl:absolute bottom-2 w-full mt-20">
          <Databiz/>
          <Audiophile/>
          <Meet/>
          <Maker/>
        </div>
      </div>
      <div className="hidden xl:flex xl:w-2/4 xl:order-2">
        <img src={ MeinImage } alt="man"/>
      </div>
      <div className="flex xl:hidden w-full justify-center order-1">
        <img src={ MeinImageMobile } alt="man"/>
      </div>
    </section>
  )
}
