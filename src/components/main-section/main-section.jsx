import React from 'react';
import { Button } from '../button'
import MeinImage from '../../images/image-hero-desktop.png'
import { ReactComponent as Databiz } from '../../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg'
import { ReactComponent as Meet } from '../../images/client-meet.svg'
import { ReactComponent as Maker } from '../../images/client-maker.svg'

export const MainSection = () => {
  return (
    <section className='w-full flex mt-6'>
      <div className='relative w-2/4 text-left mt-12'>
        <h1 className='text-8xl font-black mt-6 whitespace-pre-line'>{`Make\n remote work`}</h1>
        <p className="text-medium-gray text-lg mt-12 whitespace-pre-line">{`Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n Facilis ad nisi laboriosam. Nihil, minima dicta cum, numquam similique doloremque officia quo asperiores sequi libero maiores\n nobis molestias placeat dolorum itaque.`}</p>
      </div>
      <Button isFilled={ true }></Button>
    </section>
  )
}
