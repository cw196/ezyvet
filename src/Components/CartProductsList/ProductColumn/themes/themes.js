export default {
    base: {
        display: 'flex',

        justifyContent: 'center',

        '&>div': {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '1em 0em',
            borderBottom: '1px solid black',

            '&:nth-of-type(1)': {
                width: '8em'
            },
            '&:nth-of-type(2)': {
                width: '4em'
            },
            '&:nth-of-type(3)': {
                width: '2em'
            },
            '&:nth-of-type(4)': {
                width: '4em'
            },
            '&:nth-of-type(5)': {
                width: '10em'
            },
            '&:nth-of-type(6)': {
                width: '4em',
                cursor: 'pointer'
            }
        }
    }
}