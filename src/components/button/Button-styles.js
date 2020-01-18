import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        border: 'none',
        boxShadow: '5px 9px 15px 10px rgba(0, 0, 0, 0.07)',
        '&.-medium': {
            height: '5rem',
            width: '5rem',
        },
        '&.-large': {
            height: '10rem',
            width: '10rem',
        },
        '&.-rounded': {
            borderRadius: '50%',
        },
        '& > span':{
            fontSize: '6rem',
            display: 'block',
            height: '3rem',
            lineHeight: '2rem',
        },
        '&.-red':{
            color: 'white',
            backgroundColor: '#FF675B'
        },
        '&.-green':{
            color: 'white',
            backgroundColor: '#52E66C'
        },
    }

});

export default useStyles;