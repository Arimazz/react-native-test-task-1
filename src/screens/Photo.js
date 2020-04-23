import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export const Photo = (props) => {
  const { imgUrl } = props.route.params;

  return (
    <Image style={style.image} source={{ uri: imgUrl }} />
  );
};

const style = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});

Photo.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      imgUrl: PropTypes.string,
    }),
  }).isRequired,

};
