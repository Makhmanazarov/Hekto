import React from 'react'
import { Hero } from './components/hero/hero'
import { ProductsSec } from './components/products-sec1/products-sec'
import { ProductsSec2 } from './components/products-sec2/products-sec2'
import { Offer } from './components/offer/offer'
import { AboutUs } from './components/about-us/about-us'
import { TrendingMain } from './components/trending-sec/trending-main'
import { DiscountMain } from './components/discount/discount-main'
import { CategoryMain } from './components/category-sec/category-main'
import { News } from './components/news/news'
import { LatestMain } from '../latest-sec/lates-main'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <ProductsSec/>
      <ProductsSec2/>
      <Offer/>
      <AboutUs/>
      <TrendingMain/>
      <DiscountMain/>
      <CategoryMain/>
      <News/>
      <LatestMain/>
    </div>
  )
}
