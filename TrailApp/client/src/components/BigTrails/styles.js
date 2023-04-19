import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  textfield: {
    marginBottom: '10px',
  },
}));

export  const containerStyle = {
  width: '100%',
  height: '100%'
};

export const MapID = {
  mapId: "1ed395dbcf77ef66"
};

export const GoldTrailOptions = {
  strokeColor: 'gold',
  strokeOpacity: 1,
  strokeWeight: 6,
  fillColor: 'gold',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

export const GreenTrailOptions = {
  strokeColor: 'green',
  strokeOpacity: 1,
  strokeWeight: 6,
  fillColor: 'green',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

export const GreyTrailOptions = {
  strokeColor: 'gray',
  strokeOpacity: 1,
  strokeWeight: 6,
  fillColor: 'gray',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};


