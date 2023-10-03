import React from 'react';
import './SearchBar.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar({ placeholder, onSearch }) {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <TextField
                label={placeholder}
                variant="outlined"
                fullWidth
                onChange={handleSearch}
                className="custom-search-bar"
                InputProps={{
                    style: {
                        height: '80px',
                        color: 'black',
                        backgroundColor: 'white',
                    },
                    endAdornment: (
                        <IconButton color="primary" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    ),
                }}
            />
        </div>
    );
}

export default SearchBar;
