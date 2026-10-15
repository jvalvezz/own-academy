import MuiButton from '@mui/material/Button'

function Button({
    children,
    type = 'button',
    disabled = false,
    onClick,
    sx = {},
}) {
    return (
        <MuiButton
            type={type}
            disabled={disabled}
            onClick={onClick}
            variant="contained"
            fullWidth
            sx={{
                minHeight: 22,
                borderRadius: '4px',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-text-primary)',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: 1.2,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: '#0b78a7',
                    boxShadow: 'none',
                },
                '&:active': {
                    transform: 'translateY(1px)',
                },
                '&:focus-visible': {
                    outline: '3px solid rgba(51, 191, 251, 0.4)',
                    outlineOffset: '2px',
                },
                '&.Mui-disabled': {
                    color: 'var(--color-secondary)',
                    opacity: 0.6,
                },
                ...sx,
            }}
        >
            {children}
        </MuiButton>
    )
}

export default Button

