import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Search = ({ searchInput, setSearchInput }) => {
    const searchHandler = (event) => {
        setSearchInput(event.target.value);
    };
    return (
        <div>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <BsSearch />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="text"
                    onChange={searchHandler}
                    value={searchInput}
                />
            </InputGroup>
        </div>
    );
};

export default Search;
