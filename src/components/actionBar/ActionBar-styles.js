import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    actionbar:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: '-3rem',
        backgroundColor: 'var(--red-dark)',
        borderRadius: 'var(--rounded-amount-medium) 0 0',
        '& > div > button': {
            marginLeft: '0.5rem'
        }
    },
    actionButtonBlock: {
        width: '100%',
        marginTop: '-5rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
});

export default useStyles;