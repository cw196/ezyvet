export default {
    base: {
        '& table': {
            width: '100%',
            textAlign: 'center',

            '& tr': {
                '& td': {
                    "&:last-child": {
                        cursor: 'pointer'
                    }
                }
            }
        }
    }
}