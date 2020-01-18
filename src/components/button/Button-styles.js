import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        border: 'none',
        boxShadow: '5px 9px 15px 10px rgba(0, 0, 0, 0.07)',
        transition: 'width, height, background-color 0.5s',
        '&.-medium': {
            height: '5rem',
            width: '5rem',
            '&:active': {
                backgroundColor: '#d46860',
                width: '4.6rem',
                height: '4.6rem',
            }
        },
        '&.-large': {
            height: '10rem',
            width: '10rem',
            '&:active': {
                backgroundColor: '#50a05e',
                width: '9.6rem',
                height: '9.6rem',
            }
        },
        '&.-rounded': {
            borderRadius: '50%',
        },
        '& > span': {
            fontSize: '6rem',
            display: 'block',
            height: '3rem',
            lineHeight: '2rem',
        },
        '&.-red': {
            color: 'white',
            backgroundColor: '#FF675B'
        },
        '&.-green': {
            color: 'white',
            backgroundColor: '#52E66C'
        },
    }

});

export default useStyles;