import React from 'react';
import Item from "../Item/Item";

const List = ({filters}) => {

    return (
        <div>
            {
                Object.entries(filters).map(((value, index) => {
                    let [name, isTrue] = value;
                    const regex = new RegExp('/ ');
                    if (!regex.test(name)) {
                       name = name.replace(" ", "_");
                    }
                    return <Item
                        key={index}
                        name={name}
                        selected={isTrue}
                    />
                }))

            }
        </div>

    );
}

export default List;