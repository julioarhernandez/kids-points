import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    h2: {
        marginTop: '0',
        marginBottom: '0.5rem',
        fontSize: '0.8rem',
        color: 'var(--green-dark)',
        textTransform: 'uppercase',
    },
    header: {
        marginBottom: '2rem',
        '& span': {
            fontWeight: 'bold',
            fontSize: '1.4rem',
            color: 'var(--blue-light)'
        }
    }
});

export default useStyles;