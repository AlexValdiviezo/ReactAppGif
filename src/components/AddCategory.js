import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Buscar...');

    useEffect(()=>{
        if(inputValue.length > 0){
            setCategories(e => {
                e.splice(0,1, inputValue);
                console.log(e);
                return [...e];
            })
            console.log('cambio');
        }
    }, [inputValue]);
    
    const handleInputChange = ( event ) =>{
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length > 0){
            setCategories(e => {
                e.splice(0,0,'');
                return [...e];
            });
        }
        setInputValue('');
    }

    const handleInputBlank = () => {
        if(inputValue == 'Buscar...'){
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange }
                onClick={ handleInputBlank }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

