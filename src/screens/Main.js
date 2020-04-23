import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { setData } from '../store';
import { getData } from '../api';

export const MainContainer = ({ navigation, data, setDataInStore }) => {
  useEffect(() => {
    async function fetchData() {
      const dataFromServer = await getData();

      setDataInStore(dataFromServer);
    }

    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <Text>
        Loading...
      </Text>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const userName = item.user.first_name;
          const mainImage = item.urls.regular;

          return (
            <View style={style.container}>
              <View style={style.profile}>
                <Text style={style.profileText}>
                  {userName}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('Photo', { imgUrl: mainImage });
                }}
              >
                <Image
                  style={style.mainImage}
                  source={{ uri: mainImage }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>

  );
};

// styles
const screenWidth = Dimensions.get('screen').width;
const fontSize = 15;

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    width: screenWidth / 2,
    height: screenWidth / 2 + fontSize,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileText: {
    fontSize,
    marginLeft: 5,
  },
  mainImage: {
    width: screenWidth / 2,
    height: screenWidth / 2,
  },
});

// store
const stateToProps = state => ({
  data: state.data,
});

const dispatchToProps = dispatch => ({
  setDataInStore: dataFromServer => dispatch(setData(dataFromServer)),
});

export const Main = connect(stateToProps, dispatchToProps)(MainContainer);

// types
MainContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      first_name: PropTypes.string,
    }),
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
  })).isRequired,
  setDataInStore: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
