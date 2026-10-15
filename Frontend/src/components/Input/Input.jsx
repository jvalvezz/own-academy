import InputBase from '@mui/material/InputBase'

function Input({
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
        <label
            htmlFor={name}
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                gap: '8px',
            }}
        >
            <span
                style={{
                    color: '#a0a0a0',
                    fontSize: '13px',
                    fontWeight: 500,
                }}
            >
                {label}
            </span>

            <InputBase
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                fullWidth
                sx={{
                    minHeight: 48,
                    padding: '0 16px',
                    border: '1px solid transparent',
                    borderRadius: '24px',
                    backgroundColor: '#161616',
                    color: '#ffffff',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    '& input::placeholder': {
                        color: '#6f6f6f',
                        opacity: 1,
                    },
                    '&:focus-within': {
                        borderColor: '#33bffb',
                        boxShadow: '0 0 0 2px rgba(51, 191, 251, 0.2)',
                    },
                    '&.Mui-disabled': {
                        opacity: 0.6,
                    },
                }}
            />
        </label>
    )
}

export default Input
