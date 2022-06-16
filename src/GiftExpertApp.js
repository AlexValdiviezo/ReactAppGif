import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])

    //const handleAdd = () => {
    //    setCategories(['hunterXhunter', ...categories]);
    //}
    console.log(categories);
    return(
        <Fragment>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            {categories.map(e => {
                return(
                <div className="grid" key={e}>
                    <GifGrid category={e} key={e}/>
                </div>)
            })}

        </Fragment>
    )
}