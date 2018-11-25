import React from 'react';

const Categories = (props) => (
    <ul className="cats-general">
        {
           Object.keys(props.items).map((item, i) => {
             return <li 
                key={i}
                onClick={ () => props.chooseCategoryHandler(item) } >{props.items[item].title}</li>
           })
        }
    </ul>
)

export default Categories;