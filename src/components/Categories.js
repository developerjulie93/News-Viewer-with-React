import React from 'react';
import styled,{css} from 'styled-components';
import './Categories.scss';

const categories=[
    {
        text: 'All'
    },
    {
        text: 'Business'
    },
    {
        text: 'Entertainment'
    },
    {
        text: 'Health'
    },
    {
        text: 'Science'
    },
    {
        text: 'Sports'
    },
    {
        text: 'Technology'
    }
];
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    margin-right: 1rem;
    &:hover{
        color: #495057;
    }
    ${props=>
        props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover{
            color: #3bc9db;
        }
        `}
        `;
const Categories=({category, onSelect})=>{
    return(
        <div className="CategoriesBlock">
            {categories.map(c=>(
                <Category  key={c.text} onClick={()=>onSelect(c.text)} 
                active={category===c.text}>{c.text}</Category>
            ))}
        </div>
    );
};
export default Categories;