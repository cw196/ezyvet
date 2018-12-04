export default {
    base: {
        display: 'flex',

        '&>div': {
            border: '1px solid orange',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '2em',
            width: '2em',
            color: 'orange',

            cursor: 'pointer'
        }
    }
}