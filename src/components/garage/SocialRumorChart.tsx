import React, { useState } from 'react'
import { Button } from '../ui/button'

export default function SocialRumorChart() {
    const [period, setPeriod] = useState('month')


  return (
    <div>
        <div className='mt-2 mb-3 border-black border-2'></div>

<div className='grid grid-cols-6 grid-flow-row gap-2'>
  <Button onClick={() => {setPeriod('yestarday')}} className='px-24 rounded-sm' variant={period === 'yestarday' ? 'blue' : 'blackWide'}>
    Yesterday
  </Button>
  <Button onClick={() => {setPeriod('week')}} className='px-24 rounded-sm' variant={period === 'week' ? 'blue' : 'blackWide'}>
    Week
  </Button>
  <Button onClick={() => {setPeriod('month')}} className='px-24 rounded-sm' variant={period === 'month' ? 'blue' : 'blackWide'}>
    Month
  </Button>
  <Button onClick={() => {setPeriod('quartar')}} className='px-24 rounded-sm' variant={period === 'quartar' ? 'blue' : 'blackWide'}>
    Quarter
  </Button>
  <Button onClick={() => {setPeriod('year')}} className='px-24 rounded-sm' variant={period === 'year' ? 'blue' : 'blackWide'}>
    Year
  </Button>
  <Button onClick={() => {setPeriod('all')}} className='px-24 rounded-sm' variant={period === 'all' ? 'blue' : 'blackWide'}>
    All
  </Button>
</div>

<div className='mt-2 mb-3 border-black border-2'></div>
    </div>
  )
}
