import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Buscar...');
    
    useEffect(() => {
        if(inputValue.trim().length >= 0){
            setCategories(e=>{
                let [unique, ...rest] = e;
                return [inputValue, ...rest];
            });
        }
    }, [inputValue]);
    
    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length >= 1){
            setCategories(e => [inputValue, ...e]);
            setInputValue('');
        }
    }

    const handleInputBlank = () => {
        setInputValue('');
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

