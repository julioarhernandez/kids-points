import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
   mainComponent:{
        height: 'calc(100vh - 1rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'var(--green-dark)',
    },
    displayComponent: {
       justifyContent: 'center',
        display: 'flex',
        flex: '1',
        paddingBottom: '8rem',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 'var(--rounded-amount-medium) 0 0',
        flexDirection: 'column',
    }
});

export default useStyles;