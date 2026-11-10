import InputBase from '@mui/material/InputBase'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Input from '@mui/material/Input'
import './SearchInput.css'

function SearchInput({
    label,
    name,
    type = 'text',
    value,
    onChange,
    placeholder,
    disabled = false,
    required = false,
}) {
    return (
        <label htmlFor={name} className="search-input-field">
            {label && <span className="search-input-label">{label}</span>}

            <InputBase
                className="search-input"
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                fullWidth
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </label>
    )
}

export default SearchInput
