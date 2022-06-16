import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Buscar...');

    
    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length > 0){
            setCategories(e => {
                let [...rest] = e;
                console.log(e);
                return [inputValue, ...rest];
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

