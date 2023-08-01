import React from 'react'
import { Button } from '../ui/button'
interface DashboardGarageItemsProps{
    items?: object | undefined
    
}
export default function DashboardGarageItems({items} : DashboardGarageItemsProps) {
  return (
    <div className=''>
        {
            items ? (
                <div>

                </div>
            ) : (
                <div className='flex justify-center '>
                    <div className="flex flex-col p-14 gap-4">
                        <h4 className='text-center text-sm text-gray-600'>You don't have any Garage yet.</h4>
                        <Button variant='blackWide'>
                            Add garage
                        </Button>
                    </div>
                     
                </div>
            )
        }
    </div>
  )
}
