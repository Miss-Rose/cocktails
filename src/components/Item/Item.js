import React from 'react';


const Item = ({drink}) => {

    return (
        <div>
            <h2 className="col-12">{drink.name}</h2>
            <div className='row'>
                {
                    drink.data.map((item) => {
                        return (
                            <div key={item.idDrink} className='col-4'>
                                <h6>
                                    {item.strDrink}
                                 </h6>
                                <div>
                                    <img src={item.strDrinkThumb}
                                         alt={item.strDrink}
                                         height={'40%'}
                                         width={'40%'}
                                    />
                                </div>

                            </div>

                        )
                    })
                }
            </div>
        </div>

    );
}
export default Item;