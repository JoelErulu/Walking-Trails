import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        background: 'transparent', // Removes the black background
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between', // Spread content to left and right
        width: '100%',
    },
    menuContainer: {
        display: 'flex',
        justifyContent: 'flex-start', // Align menu button to the left
        flex: 1, // Take up space on the left side
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'flex-end', // Align text to the right
        flex: 1, // Take up space on the right side
    },
    heading: {
        color: '#000', // Change the text color to black or as needed
        fontSize: '2rem',
        textDecoration: 'none',
    },
    menuButton: {
        color: 'white',
        backgroundColor: 'green', // Button color
        '&:hover': {
            backgroundColor: '#283593', // Hover color
        },
    },
    menu: {
        backgroundColor: '#f5f5f5', // Background color of dropdown
        '& .MuiMenuItem-root': {
            color: '#333', // Text color in dropdown
            '&:hover': {
                backgroundColor: 'green', // Hover background color
                color: '#fff', // Hover text color
            },
        },
    },
    newsletter: {
        position: 'absolute',
        bottom: 0, // Move the newsletter to the bottom of the page
        width: '100%',
        textAlign: 'center',
        padding: theme.spacing(2),
        backgroundColor: '#f5f5f5', // Adjust background color if necessary
    },
}));