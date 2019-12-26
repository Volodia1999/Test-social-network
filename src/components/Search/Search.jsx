import React, {useState} from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const search = [
    {id: 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {id: 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {id: 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {id: 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {id: 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {id: 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const Search = () => {

    const [currentValue, changeValue] = useState('');

    const changeInputValue = (e) => {
        changeValue(e.target.value);
    };

    return (
        <div className='w-100 text-center'>
                <h2>Search</h2>
                <input value={currentValue} onChange={changeInputValue}/><span>Search</span>
                <p>
                    <span>Name </span>
                    <span>Price</span>
                </p>
            <div className='w-25 m-auto d-flex flex-column'>
                {search.map((s) => (
                    <div key={s.id}>
                        {s.name.includes(currentValue) &&
                        <SearchItems category={s.category} name={s.name} price={s.price}/>}
                    </div>
                ))}
            </div>
        </div>
    )
};

export const SearchItems = ({name, price, category}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className='mt-2 d-flex justify-content-between'>
                <button onClick={toggle} className='mr-3 border-0 bg-transparent'>{name}</button>
                <span>{price}</span>
            </div>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader>{category}</ModalHeader>
                    <ModalBody>
                        {name} costs {price}
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
};

export default Search;
