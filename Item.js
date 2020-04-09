import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './AppStyles';

export function Item(props) {
  const { item } = props;

  return (
    <View>
      <View style={styles.itemHeader}>
        <Image
          source={{ uri: item.user.profile_image.medium }}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Text>
          `Username:
          {item.user.username}
          `
        </Text>
      </View>
      <Image
        source={{ uri: item.urls.regular }}
        style={styles.image}
      />
    </View>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
    user: PropTypes.shape({
      username: PropTypes.string,
      profile_image: PropTypes.shape({
        medium: PropTypes.string,
      }),
    }),
  }).isRequired,
};
