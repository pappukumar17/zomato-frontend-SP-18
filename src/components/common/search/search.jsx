import { Select } from 'antd';
import axios from 'axios';
import qs from 'qs';
import { useState } from 'react';
let timeout;
let currentValue;

const fetch = (value, callback) => {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;
    const fake = () => {
        const str = qs.stringify({
            code: 'utf-8',
            itemName: value,
            itemDescription:value,
        });

        axios.get(`http://localhost:4000/customers/menu?${str}`).then((response) => {
            console.log(response)
            if (currentValue === value) {
                const data = response.data.data.map((item) => ({
                    value: item.itemName,
                    value1: item.itemDescription,
                }));
                callback(data);
            }
        });
    };
    timeout = setTimeout(fake, 300);
};

const SearchInput = (props) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const handleSearch = (newValue) => {
        if (newValue) {
            fetch(newValue, setData);
        } else {
            setData([]);
        }
    };
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Select
            showSearch
            value={value}
            placeholder={props.placeholder}
            style={props.style}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
            options={(data || []).map((d) => ({
                value: d.value,
                label: d.text,
            }))}
        />
    );
};


const SearchBar = () => (
    <SearchInput
        placeholder="input search text"
        style={{
            width: 300,
        }}
    />
);
export default SearchBar;