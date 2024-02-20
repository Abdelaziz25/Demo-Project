import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Google from '../../../images/ibm.png'
const styles = {
  white2Card: {
    width: 272,
    height: 400,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    borderRadius: 10,
  },
  upperPart: {
    width: 272,
    height: 251,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  centeredImage: {
    maxWidth: '50%',
    maxHeight: '50%',
    objectFit: 'contain',
  },
  lowerPart: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 600,
    fontSize: 19,
    lineHeight: '23.75px',
    letterSpacing: '-0.46px',
    position: 'absolute',
    marginLeft: 12,
  },
  lower2Part: {
    marginTop: 20,
  },
  lower3Part: {
    marginTop: 45,
  },
  googleText: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '25px',
    letterSpacing: '-0.48px',
    color: '#343434',
    position: 'absolute',
    top: 350,
    left: 12,
  },
};

const ActionAreaCard = () => {
  return (
    <Card style={styles.white2Card}>
      <div style={styles.upperPart}>
        <CardMedia
          component="img"
          height="140"
          image= {Google}
          alt="certificate"
          style={styles.centeredImage}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={styles.lowerPart}>
          Google IT Support
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ ...styles.lowerPart, ...styles.lower2Part }}>
          Professional Certificate
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ ...styles.lowerPart,...styles.googleText }}>
          Google
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActionAreaCard;
